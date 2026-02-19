const { Client, Account, ID } = Appwrite;

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("698d893400107bdbaf22");

const account = new Account(client);
<script src="https://cdn.jsdelivr.net/npm/appwrite@13.0.0"></script>
<script src="JS/appwrite.js"></script>
<script src="JS/home.js"></script>
