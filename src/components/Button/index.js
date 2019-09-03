import style from '@css/Button';

const Button = props => (
	<button class={style.Button} type="button" {...props} />
);

export default Button;
