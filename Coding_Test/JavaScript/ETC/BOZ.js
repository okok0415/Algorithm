function solution(word) {
    let sum = []

    const keyboard = [
        ['가', '호', '저', '론', '남', '드', '부', '이', '프', '설'],
        ['알', '크', '청', '울', '키', '초', '트', '을', '배', '주'],
        ['개', '캠', '산', '대', '단', '지', '역', '구', '너', '양'],
        ['라', '로', '권', '교', '마', '쿼', '파', '송', '차', '타'],
        ['코', '불', '레', '뉴', ' ', '서', '한', '산', '리', '개'],
        ['터', '강', '봄', '토', '캠', '상', '호', '론', '운', '삼'],
        ['보', '람', '이', '경', '아', '두', '프', '바', '트', '정'],
        ['스', '웨', '어', '쿼', '일', '소', '라', '가', '나', '도'],
        ['판', '자', '비', '우', '사', '거', '왕', '태', '요', '품'],
        ['안', '배', '차', '캐', '민', '광', '재', '봇', '북', '하']
    ]

    let arr = []
    let imsi = []
    let jwa = [0, 0]
    for (w of word) {
        for (let i = 0; i < keyboard.length; i++) {
            for (let j = 0; j < keyboard[i].length; j++) {
                if (keyboard[i][j] === w) {
                    imsi.push([i, j])
                }
            }
        }

        if (imsi.length === 0) {
            arr.push(20)
            jwa = [0, 0]
            continue

        }
        let min = 100000000000000
        let imi = []
        for (im of imsi) {
            let x = jwa[0] - im[0]
            let y = jwa[1] - im[1]

            if (x < 0) x = -x
            if (y < 0) y = -y

            if (min > x + y) {
                imi = im
                min = x + y
            }

        }

        if (jwa[0] === 0 && jwa[1] === 0) {
            jwa = imi
        } else {
            let x = jwa[0] - imi[0]
            let y = jwa[1] - imi[1]

            if (x < 0) x = -x
            if (y < 0) y = -y
            arr.push(x + y)
            jwa = imi
        }
        imsi = []
    }

    console.log(arr)


    return [arr.reduce((a, b) => a + b, 0), arr.length]

}