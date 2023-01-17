FROM node:18.12.1 as builder
WORKDIR /app
COPY . .
RUN npm ci --only=production
ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.21.3-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
