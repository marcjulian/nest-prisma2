🚧 Checkout [nestjs-prisma-starter](https://github.com/fivethree-team/nestjs-prisma-starter/tree/prisma2)

# Nest Prisma2

## Getting Started

### 1. Install Prisma2

Setup [Prisma2 CLI](https://github.com/prisma/prisma2/blob/master/docs/getting-started.md)

```bash
npm install -g prisma2
```

### 3. Prisma2: Lift

[Lift]() is used to manage the schema and migration of the database. 

Saving the migration of the database:

```bash
prisma2 lift save
```

Perform the database migration:

```bash
prisma2 lift up
```

### 4. Prisma2: Photon

[Photon](https://github.com/prisma/prisma2/blob/master/docs/photon/api.md) is a type-safe database client auto-generated based on the data model.

To generate Photon execute, this will alwayse be executed after `npm install`:

```bash
prisma2 generate
```

### 5. Seed the database data with this script

Execute the script with this command:

```sh
npm run seed
```

### 6. Install Nestjs

The [Nestjs CLI](https://docs.nestjs.com/cli/usages) can be used to generate controller, services, resolvers and more.

```
npm i -g @nestjs/cli
```

### 7. Install Dependencies

Install the dependencies for the Nest server in the folder:

```bash
npm install
```

### 8. Start Nest Server

```bash
npm run start
# or in watch mode
npm run start:dev
```

Graphql is available [localhost:3000/graphql](http://localhost:3000/graphql) and Swagger for Rest Api is available [localhost:3000/api](http://localhost:3000/api).
