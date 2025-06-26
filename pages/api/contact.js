import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

resend.apiKeys.create({ name: 'Production' });
