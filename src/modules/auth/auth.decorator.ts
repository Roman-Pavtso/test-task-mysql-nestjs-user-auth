import { SetMetadata, applyDecorators } from '@nestjs/common';
import { IS_PUBLIC_KEY } from './guards/constants';

export const AuthDisable = () => applyDecorators(SetMetadata(IS_PUBLIC_KEY, true))
