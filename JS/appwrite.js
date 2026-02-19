const { Client, Account, ID } = Appwrite;

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("698d893400107bdbaf22");

const account = new Account(client);
