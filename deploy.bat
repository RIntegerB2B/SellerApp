cd .\dist
git add .
git commit -m "Build"
git push origin master -f
Invoke-WebRequest -Uri "http://13.232.45.85:3006/sellerapp"