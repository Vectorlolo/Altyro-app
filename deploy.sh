git pull
echo $1
if [ "$1" == "build" ]
then
  ng build
fi
git add .
git commit -m "Deploying in server"
git push
sshpass -p c0ncentrationLocationActionReview ssh root@143.244.161.159 'cd projects/altyro/Altyro-app && git pull && rm -rf /var/www/html/repar && cp -r www /var/www/html/repar'
