const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tomalo670:Testing123@ds161024.mlab.com:61024/warhammer',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
