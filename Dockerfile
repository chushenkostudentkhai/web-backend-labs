# Використовуємо офіційний образ Nginx.
FROM nginx

# Копіюємо статичну сторінку до каталогу вебсервера.
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
