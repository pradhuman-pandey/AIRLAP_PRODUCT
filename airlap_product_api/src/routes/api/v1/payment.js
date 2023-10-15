import {Router} from 'express';
import {orders, success} from '../../../controllers';

const payment = Router();

payment.route('/orders').post(orders);
payment.route('/success').post(success);

export default payment;