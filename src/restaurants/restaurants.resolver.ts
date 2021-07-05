import { Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => Restaurant)
  myRestaurant() {
    return {
      name: '설빙',
      isGood: true,
    };
  }
}
