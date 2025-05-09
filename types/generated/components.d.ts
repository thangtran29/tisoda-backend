import type { Schema, Struct } from '@strapi/strapi';

export interface AppointmentAppointmentSummary extends Struct.ComponentSchema {
  collectionName: 'components_appointment_appointment_summaries';
  info: {
    description: '';
    displayName: 'Appointment Summary';
    icon: 'stack';
  };
  attributes: {
    note: Schema.Attribute.Text;
    place_address: Schema.Attribute.String;
    place_name: Schema.Attribute.String;
    price: Schema.Attribute.BigInteger;
    quantity: Schema.Attribute.Integer;
    service_name: Schema.Attribute.String;
    total_price: Schema.Attribute.BigInteger;
  };
}

export interface GeneralAddress extends Struct.ComponentSchema {
  collectionName: 'components_general_addresses';
  info: {
    displayName: 'Address';
    icon: 'house';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    district: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    ward: Schema.Attribute.String;
  };
}

export interface GeneralContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_general_contact_infos';
  info: {
    displayName: 'ContactInfo';
    icon: 'gate';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface GeneralDateTimeSelect extends Struct.ComponentSchema {
  collectionName: 'components_general_date_time_selects';
  info: {
    displayName: 'DateTimeSelect';
    icon: 'apps';
  };
  attributes: {
    date: Schema.Attribute.Date;
    time: Schema.Attribute.Time;
  };
}

export interface GeneralMetadata extends Struct.ComponentSchema {
  collectionName: 'components_general_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'bulletList';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
  };
}

export interface GeneralPaymentMethod extends Struct.ComponentSchema {
  collectionName: 'components_general_payment_methods';
  info: {
    displayName: 'Payment method';
    icon: 'rocket';
  };
  attributes: {
    method: Schema.Attribute.Enumeration<
      [
        'Th\u1EBB t\u00EDn d\u1EE5ng',
        'Chuy\u1EC3n kho\u1EA3n',
        'Ti\u1EC1n m\u1EB7t',
        'V\u00ED \u0111i\u1EC7n t\u1EED',
      ]
    > &
      Schema.Attribute.DefaultTo<'Ti\u1EC1n m\u1EB7t'>;
  };
}

export interface GeneralRating extends Struct.ComponentSchema {
  collectionName: 'components_general_ratings';
  info: {
    displayName: 'Rating';
    icon: 'star';
  };
  attributes: {
    review_count: Schema.Attribute.Decimal;
    score: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

export interface GeneralSocial extends Struct.ComponentSchema {
  collectionName: 'components_general_socials';
  info: {
    displayName: 'social';
    icon: 'user';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageMainCategory extends Struct.ComponentSchema {
  collectionName: 'components_homepage_main_categories';
  info: {
    description: '';
    displayName: 'Main Category';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.main-category-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageMainCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_main_category_items';
  info: {
    displayName: 'Main Category Item';
    icon: 'bulletList';
  };
  attributes: {
    category_place: Schema.Attribute.Relation<
      'oneToOne',
      'api::category-place.category-place'
    >;
    name: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepagePromotion extends Struct.ComponentSchema {
  collectionName: 'components_homepage_promotions';
  info: {
    description: '';
    displayName: 'Promotion';
    icon: 'priceTag';
  };
  attributes: {
    places: Schema.Attribute.Relation<'oneToMany', 'api::place.place'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageReason extends Struct.ComponentSchema {
  collectionName: 'components_homepage_reasons';
  info: {
    description: '';
    displayName: 'Reason';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PlaceGeneralInfo extends Struct.ComponentSchema {
  collectionName: 'components_place_general_infos';
  info: {
    description: '';
    displayName: 'General Info';
    icon: 'information';
  };
  attributes: {
    address: Schema.Attribute.Component<'general.address', false>;
    brief_intro: Schema.Attribute.Blocks;
    highlight: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    opening_time: Schema.Attribute.Component<'place.opening-time', true>;
    rating: Schema.Attribute.Component<'general.rating', false>;
  };
}

export interface PlaceOpeningTime extends Struct.ComponentSchema {
  collectionName: 'components_place_opening_times';
  info: {
    description: '';
    displayName: 'Opening Time';
    icon: 'seed';
  };
  attributes: {
    close_time: Schema.Attribute.Time;
    day: Schema.Attribute.Enumeration<
      [
        'Th\u1EE9 Hai',
        'Th\u1EE9 Ba',
        'Th\u1EE9 T\u01B0',
        'Th\u1EE9 N\u0103m',
        'Th\u1EE9 S\u00E1u',
        'Th\u1EE9 B\u1EA3y',
        'Ch\u1EE7 Nh\u1EADt',
      ]
    >;
    open_time: Schema.Attribute.Time;
  };
}

export interface PlaceReview extends Struct.ComponentSchema {
  collectionName: 'components_place_reviews';
  info: {
    displayName: 'Review';
    icon: 'seed';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    reviewer_name: Schema.Attribute.String;
    score: Schema.Attribute.Decimal;
  };
}

export interface PlaceServices extends Struct.ComponentSchema {
  collectionName: 'components_place_services';
  info: {
    description: '';
    displayName: 'Service';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    duration: Schema.Attribute.Integer;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    price: Schema.Attribute.BigInteger;
    service_group_name: Schema.Attribute.String;
    service_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'appointment.appointment-summary': AppointmentAppointmentSummary;
      'general.address': GeneralAddress;
      'general.contact-info': GeneralContactInfo;
      'general.date-time-select': GeneralDateTimeSelect;
      'general.metadata': GeneralMetadata;
      'general.payment-method': GeneralPaymentMethod;
      'general.rating': GeneralRating;
      'general.social': GeneralSocial;
      'homepage.main-category': HomepageMainCategory;
      'homepage.main-category-item': HomepageMainCategoryItem;
      'homepage.promotion': HomepagePromotion;
      'homepage.reason': HomepageReason;
      'place.general-info': PlaceGeneralInfo;
      'place.opening-time': PlaceOpeningTime;
      'place.review': PlaceReview;
      'place.services': PlaceServices;
    }
  }
}
