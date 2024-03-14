import Input from '../components/Input';

function Main() {
    return (
        <form action="/hello-world" method="post">
            <ul>
                <li>
                    <label htmlFor="initial-aport">Initial Aport</label>
                    <input type="text" id="initial-aport" name="initial-aport" placeholder="$0,00" />
                </li>
                <li>
                    <label htmlFor="monthly-aport">Monthly Aport</label>
                    <input type="text" id="monthly-aport" name="monthly-aport" placeholder="$0,00" />
                </li>
                <li>
                    <label htmlFor="interest">Interest</label>
                    <input type="text" id="interest" name="interest" placeholder="0,00%" />
                </li>
            </ul>
        </form>
    );
}

export default Main;