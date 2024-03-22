# CSP Iframe Demo

Start container:
```
podman run -v $(pwd)/nginx/:/etc/nginx/conf.d/ -v $(pwd)/advert/:/usr/share/nginx/html/advert/ -v $(pwd)/public/:/usr/share/nginx/html/public/ -p 8080:80 nginx:stable-alpine
```

Access the sites:
[Public Website](http://www.lvh.me:8080/)
[Advertising Website](http://advert.lvh.me:8080/)