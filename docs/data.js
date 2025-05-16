// Comprehensive icebreaker data from breakfast_hour.csv
const icebreaker_data = {
    en: {
        title: "Icebreaker",
        subtitle: "Start a conversation with an icebreaker.",
        footer: "Start your day with bright conversations",
        bad_options: [
            "jump into a live volcano",
            "jump into a whale's mouth",
            "get stuck in an elevator with your ex",
            "get bird poo on your head",
            "forget your most cherished memories",
            "live in a soap opera",
            "live in a scary movie",
            "smell like a rotten onion",
            "get caught in the rain without an umbrella"
        ],
        good_options: [
            "be able to swim like a fish",
            "be able to fly like a bird",
            "become a master of martial arts",
            "stop aging",
            "have super strength",
            "move things with your mind",
            "be fluent in every language",
            "know how to play every musical instrument",
            "travel to the past"
        ],
        open_ended: [
            "What's your favorite breakfast food?",
            "What's your favorite lunch food?",
            "What's your favorite dinner food?",
            "What's your favorite snack?",
            "What's your favorite cereal?",
            "What's your favorite color?",
            "What's your favorite book?",
            "What's your favorite movie?",
            "What's your favorite TV series?"
        ],
        // Additional icebreakers for variety
        icebreakers: [
            "If you could have dinner with any historical figure, who would it be and why?",
            "What's the most interesting place you've ever visited?",
            "If you could instantly become an expert in something, what would it be?",
            "What's your favorite book or movie and why does it resonate with you?",
            "If you could live in any fictional world, which would you choose?"
        ]
    },
    fr: {
        title: "Brise-Glace",
        subtitle: "Commencez une conversation avec un brise-glace.",
        footer: "Commencez votre journée avec des conversations brillantes",
        mauvaises_prefs: [
            "sauter dans un volcan actif",
            "sauter dans la gueule d'une baleine",
            "être coincé dans un ascenseur avec votre ex",
            "recevoir des crottes d'oiseau sur la tête",
            "oublier vos souvenirs les plus chers",
            "vivre dans un feuilleton",
            "vivre dans un film d'horreur",
            "sentir comme un oignon pourri",
            "être pris sous la pluie sans parapluie"
        ],
        bonnes_prefs: [
            "être capable de nager comme un poisson",
            "être capable de voler comme un oiseau",
            "devenir un maître des arts martiaux",
            "arrêter de vieillir",
            "avoir une force surhumaine",
            "déplacer des objets par la pensée",
            "être fluent dans toutes les langues",
            "savoir jouer de tous les instruments de musique",
            "voyager dans le passé"
        ],
        ouvertes: [
            "Quel est votre plat de petit-déjeuner préféré ?",
            "Quel est votre plat de déjeuner préféré ?",
            "Quel est votre plat de dîner préféré ?",
            "Quel est votre en-cas préféré ?",
            "Quel est votre céréale préférée ?",
            "Quelle est votre couleur préférée ?",
            "Quel est votre livre préféré ?",
            "Quel est votre film préféré ?",
            "Quelle est votre série télévisée préférée ?"
        ],
        // Additional icebreakers for variety
        icebreakers: [
            "Si vous pouviez dîner avec n'importe quelle figure historique, qui choisiriez-vous et pourquoi?",
            "Quel est l'endroit le plus intéressant que vous ayez jamais visité?",
            "Si vous pouviez instantanément devenir expert en quelque chose, que serait-ce?",
            "Quel est votre livre ou film préféré et pourquoi vous touche-t-il?",
            "Si vous pouviez vivre dans n'importe quel monde fictif, lequel choisiriez-vous?"
        ]
    },
    jp: {
        title: "会話術",
        subtitle: "会話を始めるきっかけに使いましょう。",
        footer: "会話で明るい一日を始めましょう",
        bad_jp: [
            "生きた火山に飛び込む",
            "クジラの口に飛び込む",
            "元カレ・元カノとエレベーターに閉じ込められる",
            "頭に鳥の糞が落ちる",
            "最も大切な思い出を忘れる",
            "昼ドラの中で暮らす",
            "ホラー映画の中で暮らす",
            "腐った玉ねぎの匂いがする",
            "傘なしで雨に降られる"
        ],
        good_jp: [
            "魚のように泳げる",
            "鳥のように飛べる",
            "武道の達人になる",
            "老化を止める",
            "超人的な力を持つ",
            "物を心で動かす",
            "すべての言語を流暢に話せる",
            "すべての楽器を演奏できる",
            "過去に旅行する"
        ],
        open_jp: [
            "あなたの好きな朝食は何ですか？",
            "あなたの好きな昼食は何ですか？",
            "あなたの好きな夕食は何ですか？",
            "あなたの好きなおやつは何ですか？",
            "あなたの好きなシリアルは何ですか？",
            "あなたの好きな色は何ですか？",
            "あなたの好きな本は何ですか？",
            "あなたの好きな映画は何ですか？",
            "あなたの好きなテレビシリーズは何ですか？"
        ],
        // Additional icebreakers for variety
        icebreakers: [
            "歴史上の人物と夕食を共にできるとしたら、誰を選びますか？また、その理由は？",
            "今まで訪れた中で最も興味深い場所はどこですか？",
            "一瞬でエキスパートになれるとしたら、何を選びますか？",
            "あなたのお気に入りの本や映画は何ですか？それはなぜあなたの心に響くのですか？",
            "どんなフィクションの世界に住むことができるとしたら、どこを選びますか？"
        ]
    },
    keanu: {
        title: "Keanu Mode",
        subtitle: "Learn something amazing about Keanu Reeves.",
        footer: "Keanu Reeves is breathtaking",
        keanu_trivia: [
            "Despite—or perhaps because of—his multicultural background, Keanu Reeves has never become an American citizen.",
            "Hockey kept Keanu busy as a kid.",
            "When Keanu was a kid, Alice Cooper used to hang out at his house.",
            "One of Reeves's earliest roles was in a Coca-Cola commercial.",
            "Keanu almost renamed himself "Chuck Spadina."",
            "Reeves has a deep love of motorcycles.",
            "Keanu has an extensive history of motorcycle-related injuries.",
            "In addition to his performances in River's Edge, Dangerous Liaisons, and Parenthood, Keanu Reeves moonlighted in a music video.",
            "Keanu Reeves has been willing to defer his salary to get other actors in his movies."
        ],
        // Additional facts for variety
        icebreakers: [
            "Keanu Reeves once helped a stranded stranger by driving her 50 miles out of his way.",
            "Keanu Reeves gave away a significant portion of his Matrix earnings to the special effects team.",
            "Keanu Reeves often takes pay cuts so films can hire other actors they want.",
            "Keanu Reeves secretly funds children's hospitals and doesn't attach his name to the donations.",
            "It's possible that Keanu Reeves accidentally married Winona Ryder."
        ]
    }
};