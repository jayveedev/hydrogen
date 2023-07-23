export function Button({attr}) {

    const { text } = attr;

    return(
        <button className="dl__btn_primary cart_drawer__footer_btn"
        data-cro-test-attribute disabled>
            { text }

        </button>
    );
}