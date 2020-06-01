using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using ScotlandYard.Core;
using ScotlandYard.Core.IoC;
using ScotlandYard.MLEdition.Core;
using ScotlandYard.MLEdition.Runtime;
using ScotlandYard.MLEdition.WebService.Model;
using ScotlandYard.MLEdition.WebService.Services;

namespace ScotlandYard.MLEdition.WebService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            TypeContainer.Register<IStorageProvider, StorageProvider>(InstanceBehaviour.Singleton);
            TypeContainer.Register<ISettingProvider, SettingProvider>(InstanceBehaviour.Singleton);
            TypeContainer.Register<IController, PlayerController>(InstanceBehaviour.Instance);
            Runtime.StartUp.Register(TypeContainer.Get<ITypeContainer>());
            TypeContainer.Get<IGameService>().Initialize(6);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {     
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp";
            });

            var sessionService = new UserSessionService($"{nameof(ScotlandYard)}.{nameof(ScotlandYard.MLEdition)}.JWT");
            sessionService.LoadOrCreateKey();
            services
                .AddAuthentication(auth =>
                {
                    auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    auth.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(jwt =>
                {
                    jwt.SaveToken = true;
                    jwt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateIssuerSigningKey = true,
                        ValidateAudience = false,
                        IssuerSigningKey = sessionService.Key,
                        ValidIssuer = sessionService.Issuer
                        
                    };
                    jwt.SecurityTokenValidators.Clear();
                    jwt.SecurityTokenValidators.Add(sessionService);

#if DEBUG
                    jwt.RequireHttpsMetadata = false;
#endif
                });

            TypeContainer.Register<IUserSessionService>(sessionService);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                }
            });            
        }
    }
}
