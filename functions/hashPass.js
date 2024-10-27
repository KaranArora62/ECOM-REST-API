const bcrypt = require('bcryptjs');

// The password you want to hash (e.g., 'admin')
const password = 'admin';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('Hashed Password:', hashedPassword);
};

hashPassword(password);
