import React from "react";
import n from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <div className={n.wrapper}>
            <a className={n.sort}>Сортировать по:</a>
            <ul>
                <li>Фильмы</li>
                <li>Сериалы</li>
                <li>Страна</li>
                <li>Год</li>
                <li>Критика</li>
                <li>Сборы</li>
                <li>Актеры</li>
                <li>Режиссеры</li>
            </ul>

        </div>
    )
}