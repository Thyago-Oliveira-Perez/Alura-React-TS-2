import styles from "./Item.module.scss";
import classNames from "classnames";
import cardapio from "../itens.json";

type Props = typeof cardapio[0];

export default function Item(props: Props) {
  return (
    <div className={classNames({ [styles.item]: true })}>
      <div className={classNames({ [styles.item__imagem]: true })}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={classNames({ [styles.item__descricao]: true })}>
        <div className={classNames({ [styles.item__titulo]: true })}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className={classNames({ [styles.item__tags]: true })}>
          <div className={classNames({ [styles.item__tipo]: true,
            [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true
          })}>
            {props.category.label}
          </div>
          <div className={classNames({ [styles.item__porcao]: true })}>
            {props.size}g
          </div>
          <div className={classNames({ [styles.item__qtdpessoas]: true })}>
            Serve {props.serving} {props.serving === 1 ? " pessoa" : " pessoas"} 
          </div>
          <div className={classNames({ [styles.item__valor]: true })}>
            R$ {props.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
