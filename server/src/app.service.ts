import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleContactForm(body: {
    name: string;
    email: string;
    message: string;
  }): string {
    console.log(body);

    const { name } = body;
    return `Thank you for you interest, ${name}`;
  }
}
