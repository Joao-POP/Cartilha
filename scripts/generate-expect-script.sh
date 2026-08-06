# used listing all files inside 'site' dir as well as fomatting the output to
# ftp program
echo "spawn ftp ftp://$1:$2@ftpupload.net; expect \"ftp> \"; send \"cd htdocs\r\";\
"$(for FILE in $(find -type f); do echo "expect \"ftp> \"; send \"put $FILE\r\"; "; done)"\
expect \"ftp> \"; send \"bye\r\""
