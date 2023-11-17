const { PrismaClient } = require("@prisma/client");
const { bcrypt } = require("bcrypt");

const prisma = new PrismaClient();
async function main() {
  const hashedPasswordAlice = await bcrypt.hash("alicePassword", 10);
  const hashedPasswordBob = await bcrypt.hash("bobPassword", 10);
  const hashedPasswordPiyush = await bcrypt.hash("piyushgambhir", 10);
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      password: hashedPasswordAlice,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      password: hashedPasswordBob,
    },
  });
  const piyush = await prisma.user.upsert({
    where: { email: "developer.piyushgambhir@gmail.com" },
    update: {},
    create: {
      email: "developer.piyushgambhir@gmail.com",
      name: "Piyush Gambhir",
      password: hashedPasswordPiyush,
    },
  });
  console.log({ alice, bob, piyush });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
