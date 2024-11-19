import { v2 as cloudinary} from 'cloudinary';
import { CLOUDINARY } from './constants';
import { CloudinaryService } from './cloudinary.service';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (configService: ConfigService): typeof cloudinary => {
    cloudinary.config({
      cloud_name: configService.get<string>('cloud_name'),
      api_key: configService.get<string>('api_key'),
      api_secret: configService.get<string>('api_secret'),
    });
    return cloudinary;
  },
  inject: [ConfigService],
};
