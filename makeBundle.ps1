echo Bundling..
rm -Recurse -Force deploy

mkdir -p deploy
cp -r truckchain-frontend/wallet deploy
cp -r truckchain-frontend/build deploy
cp -r truckchain-backend/*.js deploy
cp -r truckchain-backend/node_modules deploy
cp -r truckchain-backend/package.json deploy
cp truckchain-backend/connection.json deploy
cp manifest.yml deploy
cf push -f manifest.yml -p deploy