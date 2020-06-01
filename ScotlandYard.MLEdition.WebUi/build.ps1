yarn
ng build --prod false
$basePath = Resolve-Path "..\ScotlandYard.MLEdition.WebService\bin\Debug\netcoreapp3.1";
$clientApp = Join-Path -Path $basePath -ChildPath "ClientApp";
$dist = Resolve-Path ".\dist\*";
$test = Test-Path $clientApp;
if($test){
    Remove-Item -Recurse $clientApp;
}
New-Item -ItemType "directory" -Path $clientApp;
Copy-Item -Recurse -Path $dist -Destination $clientApp;