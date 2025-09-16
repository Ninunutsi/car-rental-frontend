export interface MultimediaFeatures {
  radio: boolean;
  audio_cd: boolean;
  mp3: boolean;
  usb: boolean;
  aux: boolean;
  bluetooth: boolean;
}

export interface Requirements {
  mileage_limit: number;
  deposit: string;
  franchise: string;
}

export interface CarImage {
  id: number;
  image_url: string;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  license_plate_no: string;
  year: number;
  body_color: string;
  body_type: string;
  engine_capacity: string;
  engine_power: number;
  fuel: string;
  tank_size: number;
  fuel_consumption: string;
  transmission: string;
  drive: string;
  abs: boolean;
  ebd: boolean;
  esp: boolean;
  driving_license_category: string;
  seats: number;
  number_of_doors: number;
  air_conditioning: string;
  interior: string;
  roof: string;
  powered_windows: number;
  airbags: number;
  side_wheel: string;
  cruise_control: boolean;
  rear_view_camera: boolean;
  parking_assist: boolean;
  multimedia_features: MultimediaFeatures;
  requirements: Requirements;
  car_images: CarImage[];
}
