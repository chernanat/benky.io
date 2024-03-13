type IColorsButton = 'blue' | 'white' | 'orange';
export interface IButton {
  msg: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?: IColorsButton;
  action?: () => void;
  arrow?: boolean;
}
