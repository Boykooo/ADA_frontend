import { Role } from './role';

export class Account {
  id: number;
  email: string;
  password: string;
  regDate: Date;
  verifiedEmail: boolean;
  roles: Role[];
}
