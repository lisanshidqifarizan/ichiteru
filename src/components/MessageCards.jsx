import '../style/messageCards.css'

export default function MessageCards({ onCloseCard }) {
    return (
        <div className="card-container">
            <div className="birthday-card">
                <h2>Hi Chii</h2>
                <p>It's ur Birthdayy!! Yayyy!! ~\(≧▽≦)/~🎉</p>
                <p>
                    I hope you have a nice day and a beautiful year ahead!!, then I pray that the goals you are talking about will be achieved...
                    May Allah bless you with happiness and good health!
                    and I like your name btw.. xoxoxoxo
                    oiya.. jangan lupa pencet sisi atau font dan benda di layar yaa ;3
                </p>
                <button className="close-btn" onClick={onCloseCard}>
                    Close
                </button>
            </div>
        </div>
    )
}