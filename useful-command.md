<!-- Git -->

git checkout -- .
git clean -fd

git add. git commit --amend --no-edit git push --force (Use when already commit but just fix some codes and don't want to commit more)

<!-- Command -->

npx tsx t.ts (run .ts file)
npx npm-check (to check npm package)

<!-- Postgresql + Prisma command -->

npx prisma generate (It will create a file in node_modules/@prisma/client, do this on every schema.prisma changes)
npx prisma db push (Use when already has prisma models and want to create a table on database from them, do this on every schema.prisma changes (must delete existing item on database first))
npx prisma db pull (Use when database already has tables and want to generate prisma models from them)
npx prisma studio (To check database)
npx prisma migrate dev --name delete-model (To delete table or model. "prisma migrate dev" will use "schema.prisma" and create "sql migration" with changes and then apply to the database. It also auto generate prisma client)
npx prisma migrate reset (Reset everything)

<!-- Else -->

/_ eslint-disable @typescript-eslint/no-explicit-any _/
