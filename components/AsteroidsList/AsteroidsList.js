const AsteroidsList = () => {
    return (
        <div>
            <h2>Ближайшие подлёты</h2>
            <hr/>
            <div>
                <div>Отображать расстояние: <span>в километрах</span> | <span>в лунных орбитах</span></div>
                <input type="checkbox" name="dangerous"/>
                <label htmlFor="dangerous">Показать только опасные</label>
            </div>
        </div>
    );
};

export default AsteroidsList;
