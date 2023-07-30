import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('DB Is connected Successfully')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Fail to connected Database', err)
  }
}

bootstrap()
