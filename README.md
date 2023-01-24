This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
di asumsikan sudah menginstall docker desktop: 

install mysql images & setup environment for db server
```bash
docker run --name student-dms -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret123 -d mysql
```
rename .env.example to .env

install dependencies:
```bash
pnpm i
# or
npm i
```
create database:
![image](https://user-images.githubusercontent.com/95400822/214263215-ac4ce012-0a26-4da0-9f5d-a0dcf2814bd4.png)
```bash
# login to db
mysql -u root -p
# create db:
CREATE DATABASE studentdms
```
push scheme to database
```bash
pnpm prisma db push
# or
npx prisma db push
```

run the development server:
```bash
npm next dev
# or
pnpm next dev
```
![image](./TampilanUtama.png)
![image](./create.png)
