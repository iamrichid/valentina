(function (root, factory) {
    const data = factory();
    if (typeof module !== "undefined" && module.exports) {
        module.exports = data;
    }
    root.THEMES_DATA = data;
})(typeof window !== "undefined" ? window : globalThis, function () {
    function polishThemeCopy(themes) {
        const rewrites = new Map(Object.entries({
            "Thanks for the support.": "Thank you for showing up for me, even when you did not have to.",
            "Happy Valentine's Day!": "Happy Valentine's Day, beautiful soul.",
            "Could we be more than friends?": "Can I be honest? I want us to be more than just friends.",
            "I smile at my phone when it's you.": "I catch myself smiling at my phone every time your name pops up.",
            "You make ordinary days special.": "You have a way of turning ordinary days into something worth remembering.",
            "I really, really like you.": "I really like you, and I am done pretending it is small.",
            "I want to be the reason you smile.": "I want to be one of the reasons your day feels lighter.",
            "You have my heart already.": "If I am honest, you already have a big piece of my heart.",
            "I am falling for you, hard.": "I am falling for you in a way I can no longer hide.",
            "My heart chooses you, every time.": "In every version of this story, my heart still chooses you.",
            "Everything I am is because of you.": "So much of who I am was shaped by your love and sacrifices.",
            "Thank you for the sacrifices.": "Thank you for every sacrifice you made quietly so I could stand taller.",
            "Thank you for being my rock.": "Thank you for being steady when life felt uncertain.",
            "I appreciate you more as I grow.": "The older I get, the more I understand and appreciate all you have done.",
            "You are appreciated.": "You are deeply appreciated, even when I do not say it enough.",
            "May God bless you abundantly.": "May God bless you richly, protect you, and reward your good heart.",
            "You are my sunshine.": "You bring warmth into my life in a way words rarely capture.",
            "Watching you grow is my greatest joy.": "Watching you grow into yourself has been one of my greatest joys.",
            "You make me so proud everyday.": "You make me proud every single day.",
            "You are the best thing that happened to me.": "You are one of the best gifts life has ever given me.",
            "Keep shining bright.": "Keep shining bright; the world is better because you are in it.",
            "I will always be your biggest fan.": "I will always be in your corner, cheering the loudest for you.",
            "My heart beats for you.": "My heart shows up for you in a hundred quiet ways every day.",
            "I promise to always guide you.": "I will keep guiding you with love, patience, and honesty.",
            "You are smarter and stronger than you know.": "You are far stronger and wiser than you give yourself credit for.",
            "The world is better with you in it.": "The world is genuinely brighter because you are in it.",
            "You are my legacy.": "You are part of the legacy of love I hope to leave behind.",
            "We fight, we make up, we ride.": "We argue, we laugh, we heal, and somehow we still ride together.",
            "Life is better with you.": "Life has more color, more laughter, and more meaning with you in it.",
            "Thanks for having my back.": "Thank you for always having my back, even when I was hard to defend.",
            "You know me better than anyone.": "You read me better than almost anyone, and that kind of bond is rare.",
            "My favorite person to disturb.": "You are still my favorite person to disturb on purpose.",
            "Always here for you.": "I am always here for you, no performance required.",
            "Real ones are hard to find.": "Real ones are rare, and I never take your friendship for granted.",
            "Glad we're on the same vibe.": "I am glad life put us on the same wavelength.",
            "Thanks for being a real one.": "Thank you for being solid, honest, and real with me.",
            "Vibes on vibes with you.": "With you, the vibe is easy, genuine, and always unmatched.",
            "You make the tough days easier.": "You make hard days feel lighter just by being yourself.",
            "Cheers to us.": "Cheers to us and the kind of bond that survives real life.",
            "Life is boring without you.": "Life would be a lot less fun without you in it.",
            "You're a rare gem.": "You are a rare gem, and I hope you never forget that.",
            "You are a once-in-a-lifetime friend.": "You are the kind of friend people are lucky to find once in a lifetime.",
            "I appreciate you more than you know.": "I appreciate you more deeply than I say out loud.",
            "Thanks for always being there.": "Thank you for being there consistently, not just when it is convenient.",
            "You are my chosen family.": "You feel like chosen family, and that means everything to me.",
            "Thanks for not being annoying.": "Thank you for being lovable even when you are being a lot.",
            "You make work bearable.": "You make work days lighter, easier, and a lot more human.",
            "I appreciate your help always.": "I appreciate how reliably you show up and help out.",
            "You're a great team player.": "You make the team stronger with your attitude and consistency.",
            "Glad we work together.": "I am genuinely glad we get to work together.",
            "Thanks for saving me in meetings.": "Thank you for the many times you rescued a meeting without making it obvious.",
            "My favorite work bestie.": "You are easily my favorite person to share office chaos with.",
            "I'd actually hang out with you outside work.": "You are one of the few colleagues I would gladly hang out with outside work.",
            "You make the office fun.": "You make the office feel less like a grind and more like a team.",
            "You make every project better.": "Every project gets better when your brain and energy are in the room.",
            "I'm grateful to have you as a colleague.": "I am genuinely grateful to have you as a colleague.",
            "Thanks for being such a great teammate.": "Thank you for being the kind of teammate people can depend on.",
            "You're a true professional and a friend.": "You carry yourself like a true professional, and still make room for real friendship.",
            "Thanks for the opportunity.": "Thank you for the opportunities and trust you have given me.",
            "Great leadership.": "Your leadership creates clarity, confidence, and momentum.",
            "Have a nice day!": "Wishing you a calm, successful, and rewarding day ahead.",
            "Thanks for guiding the team.": "Thank you for guiding the team with patience and direction.",
            "I appreciate your patience.": "I appreciate your patience, especially in the moments I was still learning.",
            "Glad to be on your team.": "I am proud to be on a team led by you.",
            "Best boss ever. (Raise next?)": "Still one of the best bosses to work with, and yes, I am still looking at that raise.",
            "You make work inspiring.": "You make the work feel meaningful and the goals feel reachable.",
            "Thanks for believing in me.": "Thank you for believing in me and giving me room to grow.",
            "A true leader.": "A true leader: steady, clear, and inspiring under pressure.",
            "Thank you for your incredible leadership.": "Thank you for your leadership, your patience, and the standard you set.",
            "I've learned so much from you.": "I have learned so much from how you lead and how you carry responsibility.",
            "Your vision is inspiring.": "Your vision is clear, ambitious, and genuinely inspiring.",
            "I appreciate the opportunities you've given me.": "I truly appreciate the opportunities you have trusted me with.",
            "I know you dey watch me like DSTV.": "I know you dey watch me like DSTV, but grace still dey stream live.",
            "Your eye-red no fit stop my grace.": "Your eye-red no fit block what God already wrote for me.",
            "Even Shatta Wale say: 'My enemies shame.'": "Even Shatta Wale talk am: my enemies go shame.",
            "We are not friends.": "Let us not pretend, we are not friends and that is okay.",
            "Keep watching, the show just started.": "Keep watching, the show is just getting started.",
            "Validation? I don't need yours.": "Validation? I do not need yours to know my value.",
            "I'm busy winning.": "I am too focused on winning and healing to entertain bitterness.",
            "Grace is natural.": "Grace looks natural on me because I fought for peace."
        }));

        const rewriteText = (value) => rewrites.get(value) || value;

        for (const theme of Object.values(themes || {})) {
            for (const flow of Object.values((theme && theme.flow) || {})) {
                for (const tier of Object.values((flow && flow.tiers) || {})) {
                    if (Array.isArray(tier.messages)) {
                        tier.messages = tier.messages.map(rewriteText);
                    }
                    if (typeof tier.question === "string") {
                        tier.question = rewriteText(tier.question);
                    }
                }
                if (flow.success) {
                    if (typeof flow.success.message === "string") {
                        flow.success.message = rewriteText(flow.success.message);
                    }
                    if (Array.isArray(flow.success.looping_quotes)) {
                        flow.success.looping_quotes = flow.success.looping_quotes.map(rewriteText);
                    }
                }
            }
        }

        const setTier = (type, gender, tierName, messages, question) => {
            const tier = themes && themes[type] && themes[type].flow && themes[type].flow[gender] &&
                themes[type].flow[gender].tiers && themes[type].flow[gender].tiers[tierName];
            if (!tier) return;
            tier.messages = messages;
            tier.question = question;
        };

        const setSuccessTier = (type, gender, tierName, success) => {
            const flow = themes && themes[type] && themes[type].flow && themes[type].flow[gender];
            if (!flow) return;
            flow.success_by_tier = flow.success_by_tier || {};
            flow.success_by_tier[tierName] = success;
        };

        // Handcrafted premium copy for top categories (lover, crush, friend)
        setTier("lover", "her", "sweet", [
            "You make softness feel powerful, and loving you has made my world gentler.",
            "Even on ordinary days, your presence turns simple moments into something beautiful.",
            "I do not just want your attention; I want to keep earning your trust with consistency.",
            "If love is a home, then your heart already feels like mine."
        ], "Will you let me love you deeply and intentionally?");

        setTier("lover", "her", "heavy", [
            "Before I had the words, my spirit already knew there was something sacred about you.",
            "You have seen parts of me I hide from the world, and still you stayed with tenderness.",
            "I want to choose you loudly in celebration and quietly in the hard seasons too.",
            "What I feel for you is not a passing emotion; it is the kind of love I want to build a life around."
        ], "Will you be my forever Valentine, in peace and in passion?");

        setTier("lover", "him", "sweet", [
            "You make me feel safe enough to be fully myself, and that gift means everything to me.",
            "Your strength is not just in what you carry, but in how gently you love.",
            "Being with you feels like calm, laughter, and home all at once.",
            "I do not only admire you; I cherish the life we could build together."
        ], "Will you let this love grow deeper with me?");

        setTier("lover", "him", "heavy", [
            "Loving you has taught me that real love can be both steady and overwhelming in the best way.",
            "You are the man I pray with, dream with, and want beside me when life gets real.",
            "I want to honor your heart, protect your peace, and celebrate your wins like they are mine too.",
            "This is not just romance to me; this is commitment waiting for your yes."
        ], "Will you be mine fully, and let me be yours fully?");

        setTier("lover", "them", "sweet", [
            "You carry a kind of light that makes me feel seen without needing to explain myself.",
            "With you, affection feels honest, playful, and deeply grounding.",
            "I love how we can be soft, silly, and sincere in the same breath.",
            "What we have feels rare, and I want to treat it like the gift it is."
        ], "Will you let me love you with intention and care?");

        setTier("lover", "them", "heavy", [
            "You found me in a season I thought no one could understand, and you loved me without fear.",
            "The way we connect feels bigger than timing, bigger than luck, and bigger than words.",
            "I want to choose you in public, in private, in joy, and in every difficult chapter.",
            "What I feel for you is deep, certain, and worthy of a lifetime."
        ], "Will you be my forever, and let us build something lasting?");

        setTier("crush", "her", "sweet", [
            "I tried to play it cool, but the truth is you have been on my mind more than I planned.",
            "You have this graceful energy that makes every room feel a little brighter.",
            "I like how easy it feels to smile when I am talking to you.",
            "I am not here to play games; I am here because I genuinely want to know you more."
        ], "Can I take you from crush to something real?");

        setTier("crush", "her", "heavy", [
            "I have sat with these feelings long enough to know they are not just excitement.",
            "There is a depth to you that keeps pulling me in, and I respect that as much as I desire it.",
            "I would rather be honest and risk the moment than stay silent and regret it.",
            "I am ready to show up with intention, effort, and consistency if you let me."
        ], "Can I love you out loud, not just from a distance?");

        setTier("crush", "him", "sweet", [
            "You have been living rent-free in my head, and honestly, I do not mind it.",
            "I admire your vibe, your mind, and the way you carry yourself.",
            "Every small conversation with you leaves me wanting one more.",
            "This is me being brave enough to say I would like a real chance with you."
        ], "Can we turn this crush into something worth building?");

        setTier("crush", "him", "heavy", [
            "What started as attraction has grown into genuine admiration and real feelings.",
            "I do not just want your attention for a moment; I want to know the man behind the vibe.",
            "I am willing to be intentional, patient, and clear because you feel worth that effort.",
            "If you give me space in your world, I will not treat it casually."
        ], "Can I be more than your admirer and become your person?");

        setTier("crush", "them", "sweet", [
            "You have a way of being unforgettable without even trying.",
            "I replay our conversations because they leave me smiling for hours.",
            "There is something about your energy that feels both exciting and safe.",
            "I would love the chance to know you beyond the crush and into something genuine."
        ], "Can we give this chemistry a real chance?");

        setTier("crush", "them", "heavy", [
            "I have tried to downplay these feelings, but they keep growing roots.",
            "You are not just someone I like looking at; you are someone I want to understand deeply.",
            "I am not offering mixed signals, I am offering intention.",
            "If you say yes, I will meet this with honesty, care, and real effort."
        ], "Can I stop calling you my crush and start calling this the beginning?");

        setTier("friend", "her", "sweet", [
            "You have been a safe place for my laughter, my tears, and my unfiltered thoughts.",
            "Your friendship has carried me through more than you probably realize.",
            "Thank you for loving me in practical ways, not just pretty words.",
            "I hope you always remember how rare and valuable you are to me."
        ], "No matter what changes, can we keep choosing this friendship?");

        setTier("friend", "her", "heavy", [
            "Some people come into your life and become a chapter; you became part of my foundation.",
            "You have shown me loyalty, grace, and truth in moments when I needed all three.",
            "I do not say this lightly: your friendship has shaped my life for the better.",
            "If I am ever blessed with peace, healing, and joy, your presence is part of that story."
        ], "Thank you for being my chosen family, now and always.");

        setTier("friend", "him", "sweet", [
            "You are one of the few people I can be fully real with and still feel understood.",
            "Thank you for the laughs, the honesty, and the random check-ins that came at the right time.",
            "You have been solid in a world where consistency is rare.",
            "I do not take your friendship lightly; real ones like you are hard to find."
        ], "Can we keep this brotherhood solid for the long run?");

        setTier("friend", "him", "heavy", [
            "You have stood beside me in seasons where words were not enough, and I will never forget that.",
            "Your loyalty has been loud in action, even when you barely said anything.",
            "I have learned from your strength, your humor, and the way you keep showing up.",
            "You are more than a friend to me; you are family by choice and by proof."
        ], "Respect always. Brotherhood always.");

        setTier("friend", "them", "sweet", [
            "Our friendship is one of my favorite places to be myself.",
            "Thank you for bringing honesty, warmth, and good chaos into my life.",
            "You have a gift for making people feel seen, and I hope you know I see you too.",
            "I am grateful for a bond that feels easy, deep, and real."
        ], "Can we keep protecting this beautiful friendship?");

        setTier("friend", "them", "heavy", [
            "You have walked with me through growth, confusion, laughter, and all the in-between.",
            "Your friendship has been a steady light, especially in seasons that felt heavy.",
            "I trust you because you have earned it in a hundred quiet moments.",
            "You are not just part of my life story; you are part of what makes it meaningful."
        ], "Thank you for being my person in friendship, for real.");

        // Premium final-screen upgrades (tier-aware success states)
        setSuccessTier("lover", "her", "sweet", {
            heading: "My Heart Is Smiling 💖",
            message: "You make love feel soft, safe, and worth showing up for.",
            looping_quotes: ["Soft with you.", "Safe with you.", "I choose you.", "This love is real."]
        });
        setSuccessTier("lover", "her", "heavy", {
            heading: "Forever Starts Here 👑",
            message: "What I feel for you is deep, intentional, and built to last.",
            looping_quotes: ["Forever starts here.", "I choose you daily.", "Peace and passion.", "My answered prayer."]
        });
        setSuccessTier("lover", "him", "sweet", {
            heading: "My Safe Place 💙",
            message: "With you, love feels steady, warm, and beautifully real.",
            looping_quotes: ["My safe place.", "My peace.", "My favorite yes.", "Built with love."]
        });
        setSuccessTier("lover", "him", "heavy", {
            heading: "Chosen, Fully ✨",
            message: "This is the kind of love I want to protect, honor, and build with you.",
            looping_quotes: ["Chosen fully.", "Real love.", "My person.", "For the long run."]
        });
        setSuccessTier("lover", "them", "sweet", {
            heading: "You Feel Like Home 💫",
            message: "What we have is rare, and I want to love it well.",
            looping_quotes: ["You feel like home.", "Rare and real.", "Soft and true.", "I choose us."]
        });
        setSuccessTier("lover", "them", "heavy", {
            heading: "This Love Is Lasting 🌟",
            message: "I am not here for moments only; I am here for a life we can build.",
            looping_quotes: ["Lasting love.", "Deep and certain.", "I choose us.", "For every season."]
        });

        setSuccessTier("crush", "her", "sweet", {
            heading: "Real Feelings, No Games 😉",
            message: "This crush is genuine, and I would love a real chance with you.",
            looping_quotes: ["No games.", "Real interest.", "You stay on my mind.", "Let me try, for real."]
        });
        setSuccessTier("crush", "her", "heavy", {
            heading: "Honest Heart, Open Door 🌹",
            message: "I came with honesty, intention, and feelings I can no longer hide.",
            looping_quotes: ["I meant every word.", "No more distance.", "Honest intention.", "Take a chance on me."]
        });
        setSuccessTier("crush", "him", "sweet", {
            heading: "Brave Enough To Say It 😌",
            message: "I like you for real, and I am ready to see where this can go.",
            looping_quotes: ["I said it.", "For real.", "Worth the risk.", "Let us see."]
        });
        setSuccessTier("crush", "him", "heavy", {
            heading: "From Admiration To Intention 🔥",
            message: "What I feel is deeper than a crush, and I am ready to show up properly.",
            looping_quotes: ["More than a crush.", "Clear intention.", "No mixed signals.", "I am serious."]
        });
        setSuccessTier("crush", "them", "sweet", {
            heading: "Chemistry, But Honest ✨",
            message: "You are unforgettable, and I would love to explore this genuinely.",
            looping_quotes: ["Unforgettable.", "Good chemistry.", "Genuine interest.", "Your move 😉"]
        });
        setSuccessTier("crush", "them", "heavy", {
            heading: "The Beginning? 💌",
            message: "I am offering honesty, care, and effort if you want to meet me there.",
            looping_quotes: ["The beginning?", "Clear heart.", "Real effort.", "I am ready."]
        });

        setSuccessTier("friend", "her", "sweet", {
            heading: "Friendship Like Gold 💛",
            message: "Your friendship is a gift I carry with gratitude.",
            looping_quotes: ["Chosen family.", "Pure gold.", "Thank you for showing up.", "I value you deeply."]
        });
        setSuccessTier("friend", "her", "heavy", {
            heading: "Foundation Friend 🫶",
            message: "You are part of the reason my life feels held together in hard seasons.",
            looping_quotes: ["Part of my foundation.", "Grace and loyalty.", "I honor this bond.", "Thank you, always."]
        });
        setSuccessTier("friend", "him", "sweet", {
            heading: "Real One, For Real 🤝",
            message: "Your consistency and loyalty mean more than I say.",
            looping_quotes: ["Real one.", "Solid always.", "Brotherhood matters.", "Respect and love."]
        });
        setSuccessTier("friend", "him", "heavy", {
            heading: "Brother By Proof 🛡️",
            message: "You earned this title in action, not just words.",
            looping_quotes: ["Brother by proof.", "Loyal in silence.", "Solid through seasons.", "Family by choice."]
        });
        setSuccessTier("friend", "them", "sweet", {
            heading: "A Rare Kind Of Friend 💫",
            message: "This friendship feels safe, joyful, and deeply real.",
            looping_quotes: ["Rare friendship.", "Warm and real.", "I see you.", "Grateful for us."]
        });
        setSuccessTier("friend", "them", "heavy", {
            heading: "My Person In Friendship 🌿",
            message: "Your presence has brought light, trust, and meaning to my life.",
            looping_quotes: ["My person in friendship.", "Steady light.", "Trust earned.", "This bond matters."]
        });

        return themes;
    }

    const themes = {
    "lover": {
        "emojis": [
            "🌸",
            "🌹",
            "❤️",
            "💕"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-love.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "“Obi doba, m'ani agye wo ho.”",
                            "Chale, your love sweet pass Ghana Jollof.",
                            "You are my Black Star—the brightest light.",
                            "I want to build a world with only you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "Every moment with you is a blessing.",
                            "You make my heart beat faster.",
                            "I can't imagine life without you.",
                            "You are my favorite notification."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the sugar in my koko.",
                            "My love for you is bigger than the ocean.",
                            "I promise to always be by your side.",
                            "You are my everything, my Odo."
                        ],
                        "question": "Will you be my Valentine forever?"
                    },
                    "heavy": {
                        "messages": [
                            "My soul recognized you before my eyes did.",
                            "I am yours, in this life and the next.",
                            "You are the answered prayer I waited for.",
                            "I love you more than words can carry."
                        ],
                        "question": "Will you be my eternal Valentine?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my blessing. You are my Queen.",
                    "looping_quotes": [
                        "You are my blessing.",
                        "You are my Queen.",
                        "Forever yours.",
                        "I love you truly."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You are my calm in the chaos.",
                            "Chale, you be my gee for life.",
                            "You make me feel safe.",
                            "I want to build a vibe with you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "Every moment with you is a vibe.",
                            "You make my heart beat faster.",
                            "I respect and adore you.",
                            "You're the King of my heart."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are my strength and my peace.",
                            "My love for you is deep.",
                            "I promise to always back you up.",
                            "You are my everything, my Odo."
                        ],
                        "question": "Will you be my Valentine forever?"
                    },
                    "heavy": {
                        "messages": [
                            "My soul recognized you instantly.",
                            "I am yours, fully.",
                            "You are the man I prayed for.",
                            "I love you more than words can carry."
                        ],
                        "question": "Will you be my King?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my King. My Protector.",
                    "looping_quotes": [
                        "You are my King.",
                        "My Protector.",
                        "Forever yours.",
                        "I love you truly."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You are my person.",
                            "Chale, our vibe is unmatched.",
                            "You make me smile.",
                            "I want to be with you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "Every moment with you is a blessing.",
                            "You are my heart.",
                            "Life means more with you.",
                            "My favorite human."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the sweetness in my life.",
                            "My love for you is big.",
                            "Always by your side.",
                            "You are my Odo."
                        ],
                        "question": "Will you be my Valentine forever?"
                    },
                    "heavy": {
                        "messages": [
                            "My soul recognized you.",
                            "I am yours.",
                            "You are my answered prayer.",
                            "I love you deeply."
                        ],
                        "question": "Will you be my Valentine?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my blessing. My Love.",
                    "looping_quotes": [
                        "You are my blessing.",
                        "My Love.",
                        "Forever yours.",
                        "I love you."
                    ]
                }
            }
        }
    },
    "crush": {
        "emojis": [
            "😍",
            "👀",
            "✨",
            "💌"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-love.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I’ve been shy to say this...",
                            "Every time I see you, my heart speeds up.",
                            "You are the only vibe I’m feeling.",
                            "Could we be more than friends?"
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "I smile at my phone when it's you.",
                            "You are effortlessly beautiful.",
                            "You make ordinary days special.",
                            "I really, really like you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the crush that never faded.",
                            "I want to be the reason you smile.",
                            "Let's stop pretending we're just friends.",
                            "You have my heart already."
                        ],
                        "question": "Can I take you out?"
                    },
                    "heavy": {
                        "messages": [
                            "I am falling for you, hard.",
                            "You remain the most beautiful mystery.",
                            "I want to know every part of you.",
                            "My heart chooses you, every time."
                        ],
                        "question": "Be mine, please?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "I'm glad I said it. You're beautiful.",
                    "looping_quotes": [
                        "I'm glad I said it.",
                        "You're beautiful.",
                        "Let's see where this goes.",
                        "You're special."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I’ve been eyeing you lowkey...",
                            "My heart does a thing when you walk inside.",
                            "You be the only vibe I’m feeling.",
                            "Could we be more than friends?"
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "I smile at my phone when it's you.",
                            "You are handsome as hell.",
                            "You make ordinary days special.",
                            "I really, really like you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the crush that stuck.",
                            "I want to be the reason you smile.",
                            "No more just friends.",
                            "You have my heart already."
                        ],
                        "question": "Can we link up?"
                    },
                    "heavy": {
                        "messages": [
                            "I am falling for you, hard.",
                            "You remain the most incredible man I know.",
                            "I want to know every part of you.",
                            "My heart chooses you, every time."
                        ],
                        "question": "Be mine, please?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "I'm glad I said it. You're valid.",
                    "looping_quotes": [
                        "I'm glad I said it.",
                        "You're valid.",
                        "Let's see where this goes.",
                        "You're special."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I’ve been shy to say this...",
                            "Every time I see you, it's a mood.",
                            "You be the only vibe I’m feeling.",
                            "Could we be more than friends?"
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "basic": {
                        "messages": [
                            "I smile at my phone when it's you.",
                            "You are stunning.",
                            "You make ordinary days special.",
                            "I really, really like you."
                        ],
                        "question": "Will you be my Valentine?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the crush that never faded.",
                            "I want to be the reason you smile.",
                            "Let's stop pretending we're just friends.",
                            "You have my heart already."
                        ],
                        "question": "Can I take you out?"
                    },
                    "heavy": {
                        "messages": [
                            "I am falling for you, hard.",
                            "You are the most beautiful soul I've met.",
                            "I want to build a future with you.",
                            "My heart chooses you, every time."
                        ],
                        "question": "Be with me?"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "I'm glad I said it. You make me smile.",
                    "looping_quotes": [
                        "I'm glad I said it.",
                        "You make me smile.",
                        "Let's see where this goes.",
                        "You're special."
                    ]
                }
            }
        }
    },
    "parent": {
        "emojis": [
            "👑",
            "🛡️",
            "💐",
            "🏡"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-love.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Everything I am is because of you.",
                            "God really blessed me with the best Mom.",
                            "Thank you for the sacrifices.",
                            "Your prayers keep me going."
                        ],
                        "question": "Can I tell you I love you today?"
                    },
                    "basic": {
                        "messages": [
                            "You taught me what love really means.",
                            "Thank you for being my rock.",
                            "I appreciate you more as I grow.",
                            "You are appreciated."
                        ],
                        "question": "I love you, Mom!"
                    },
                    "sweet": {
                        "messages": [
                            "Home is wherever you are.",
                            "Your wisdom guides my every step.",
                            "I am so proud to be your child.",
                            "May God bless you abundantly."
                        ],
                        "question": "Love you always."
                    },
                    "heavy": {
                        "messages": [
                            "You gave me life and taught me to live.",
                            "I owe you everything good in me.",
                            "Your love is purest.",
                            "I will always take care of you."
                        ],
                        "question": "I love you deeply, Ma."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my Queen. God bless you.",
                    "looping_quotes": [
                        "You are my Queen.",
                        "God bless you.",
                        "Best Mom ever.",
                        "I appreciate you."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Everything I am is because of you.",
                            "God really blessed me with the best Dad.",
                            "Thank you for the sacrifices.",
                            "Your guidance keeps me going."
                        ],
                        "question": "Can I tell you I love you today?"
                    },
                    "basic": {
                        "messages": [
                            "You taught me what strength really means.",
                            "Thank you for being my rock.",
                            "I appreciate you more as I grow.",
                            "You are appreciated."
                        ],
                        "question": "I love you, Dad!"
                    },
                    "sweet": {
                        "messages": [
                            "You built this home for us.",
                            "Your wisdom guides my steps.",
                            "I am so proud to be your child.",
                            "May God bless you abundantly."
                        ],
                        "question": "Love you always."
                    },
                    "heavy": {
                        "messages": [
                            "You gave me life and taught me to be strong.",
                            "I owe you everything good in me.",
                            "Your love is solid.",
                            "I will always take care of you."
                        ],
                        "question": "I love you deeply, Pa."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my Hero. God bless you.",
                    "looping_quotes": [
                        "You are my Hero.",
                        "God bless you.",
                        "Best Dad ever.",
                        "I appreciate you."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Everything I am is because of you.",
                            "God blessed me with you.",
                            "Thank you for the sacrifices.",
                            "Your prayers keep me going."
                        ],
                        "question": "Can I tell you I love you today?"
                    },
                    "basic": {
                        "messages": [
                            "You taught me what love really means.",
                            "Thank you for being my rock.",
                            "I appreciate you more as I grow.",
                            "You are appreciated."
                        ],
                        "question": "I love you!"
                    },
                    "sweet": {
                        "messages": [
                            "Home is wherever you are.",
                            "Your wisdom guides my steps.",
                            "I am so proud to be yours.",
                            "May God bless you abundantly."
                        ],
                        "question": "Love you always."
                    },
                    "heavy": {
                        "messages": [
                            "You are my absolute foundation.",
                            "I owe you my life and my happiness.",
                            "Your love is the greatest gift.",
                            "I will forever cherish you."
                        ],
                        "question": "I love you beyond words."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "You are my hero. God bless you.",
                    "looping_quotes": [
                        "You are my hero.",
                        "God bless you.",
                        "The real GOAT.",
                        "I appreciate you."
                    ]
                }
            }
        }
    },
    "child": {
        "emojis": [
            "🌞",
            "🧸",
            "🎈",
            "🐣"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You are my sunshine.",
                            "Watching you grow is my greatest joy.",
                            "You make me so proud everyday.",
                            "My little Princess."
                        ],
                        "question": "Love you, baby girl!"
                    },
                    "basic": {
                        "messages": [
                            "You are the best thing that happened to me.",
                            "Keep shining bright.",
                            "I will always be your biggest fan.",
                            "My heart beats for you."
                        ],
                        "question": "Love you daughter!"
                    },
                    "sweet": {
                        "messages": [
                            "I promise to always guide you.",
                            "You are smarter and stronger than you know.",
                            "The world is better with you in it.",
                            "You are my legacy."
                        ],
                        "question": "Love you endlessly."
                    },
                    "heavy": {
                        "messages": [
                            "My love for you has no conditions.",
                            "I will move mountains for you.",
                            "You are my heart walking outside.",
                            "Forever my baby girl."
                        ],
                        "question": "I love you deep."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "My Princess. Shine on.",
                    "looping_quotes": [
                        "My Princess.",
                        "Shine on.",
                        "Love you always.",
                        "You're the best."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You are my sunshine.",
                            "Watching you grow is my greatest joy.",
                            "You make me so proud everyday.",
                            "My little King."
                        ],
                        "question": "Love you, son!"
                    },
                    "basic": {
                        "messages": [
                            "You are the best thing that happened to me.",
                            "Keep shining bright.",
                            "I will always be your biggest fan.",
                            "My heart beats for you."
                        ],
                        "question": "Love you son!"
                    },
                    "sweet": {
                        "messages": [
                            "I promise to always guide you.",
                            "You are smarter and stronger than you know.",
                            "The world is better with you in it.",
                            "You are my legacy."
                        ],
                        "question": "Love you endlessly."
                    },
                    "heavy": {
                        "messages": [
                            "My love for you has no conditions.",
                            "I will move mountains for you.",
                            "You are my heart walking outside.",
                            "Forever my boy."
                        ],
                        "question": "I love you deep."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "My Champion. Shine on.",
                    "looping_quotes": [
                        "My Champion.",
                        "Shine on.",
                        "Love you always.",
                        "You're the best."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You are my sunshine.",
                            "Watching you grow is my greatest joy.",
                            "You make me so proud everyday.",
                            "My little blessing."
                        ],
                        "question": "Love you, kiddo!"
                    },
                    "basic": {
                        "messages": [
                            "You are the best thing that happened to me.",
                            "Keep shining bright.",
                            "I will always be your biggest fan.",
                            "My heart beats for you."
                        ],
                        "question": "Love you!"
                    },
                    "sweet": {
                        "messages": [
                            "I promise to always guide you.",
                            "You are smarter and stronger than you know.",
                            "The world is better with you in it.",
                            "You are my legacy."
                        ],
                        "question": "Love you endlessly."
                    },
                    "heavy": {
                        "messages": [
                            "My love for you is infinite.",
                            "You are my greatest pride and joy.",
                            "I will always protect and support you.",
                            "You are my whole world."
                        ],
                        "question": "I love you endlessly."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "My pride and joy. Shine on.",
                    "looping_quotes": [
                        "My pride and joy.",
                        "Shine on.",
                        "Love you always.",
                        "You're the best."
                    ]
                }
            }
        }
    },
    "sibling": {
        "emojis": [
            "🎮",
            "🍕",
            "🤪",
            "🤛"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-funny.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You’re annoying, but you're my person.",
                            "Still stealing my clothes?",
                            "Best sister ever (mostly).",
                            "Thanks for keeping my secrets."
                        ],
                        "question": "Love you, sis!"
                    },
                    "basic": {
                        "messages": [
                            "We fight, we make up, we ride.",
                            "Life is better with you.",
                            "You're my first best friend.",
                            "Thanks for having my back."
                        ],
                        "question": "Love you, nuisance."
                    },
                    "sweet": {
                        "messages": [
                            "You know me better than anyone.",
                            "Lucky to have a sister like you.",
                            "My favorite person to disturb.",
                            "Always here for you."
                        ],
                        "question": "Love you!"
                    },
                    "heavy": {
                        "messages": [
                            "You're not just my sister, you're my soulmate.",
                            "I would do anything for you.",
                            "Our bond is unbreakable.",
                            "Thank you for being my anchor."
                        ],
                        "question": "Love you forever, sis."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Sister sister. Siblings 4L.",
                    "looping_quotes": [
                        "Sister sister.",
                        "Siblings 4L.",
                        "Love you.",
                        "Got your back."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You’re annoying, but you're my guy.",
                            "Still chopping my food?",
                            "Best brother ever.",
                            "Thanks for not snitching."
                        ],
                        "question": "Love you, bro!"
                    },
                    "basic": {
                        "messages": [
                            "We fight, we make up, we ride.",
                            "Life is better with you.",
                            "You're my day one.",
                            "Thanks for having my back."
                        ],
                        "question": "Love you, man."
                    },
                    "sweet": {
                        "messages": [
                            "You know me better than anyone.",
                            "Lucky to have a brother like you.",
                            "My favorite person to disturb.",
                            "Always here for you."
                        ],
                        "question": "Love you!"
                    },
                    "heavy": {
                        "messages": [
                            "You're not just my brother, you're my best friend.",
                            "I've always looked up to you.",
                            "Our bond is for life.",
                            "Thanks for being my protector."
                        ],
                        "question": "Love you forever, bro."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Brotherhood. Day One.",
                    "looping_quotes": [
                        "Brotherhood.",
                        "Day One.",
                        "Love you.",
                        "Got your back."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "You’re annoying, but you're my person.",
                            "I'd still share my last plantain with you.",
                            "The best partner-in-crime.",
                            "Thanks for not snitching."
                        ],
                        "question": "Love you!"
                    },
                    "basic": {
                        "messages": [
                            "We fight, we make up, we ride.",
                            "Life is better with you.",
                            "You're my first best friend.",
                            "Thanks for having my back."
                        ],
                        "question": "Love you, nuisance."
                    },
                    "sweet": {
                        "messages": [
                            "You know me better than anyone.",
                            "Lucky to grow up with you.",
                            "My favorite person to disturb.",
                            "Always here for you."
                        ],
                        "question": "Love you!"
                    },
                    "heavy": {
                        "messages": [
                            "You are my first and forever friend.",
                            "I am so lucky to have you in my life.",
                            "We share a bond that nothing can break.",
                            "I will always be here for you."
                        ],
                        "question": "Love you deeply."
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Blood is thicker. Siblings 4L.",
                    "looping_quotes": [
                        "Blood is thicker.",
                        "Siblings 4L.",
                        "Love you.",
                        "Got your back."
                    ]
                }
            }
        }
    },
    "friend": {
        "emojis": [
            "🥂",
            "🤝",
            "🌟",
            "👯"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-energy.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Real ones are hard to find.",
                            "Glad we're on the same vibe.",
                            "You make life fun, girl.",
                            "Will you be my Galentine?"
                        ],
                        "question": "Love you!"
                    },
                    "basic": {
                        "messages": [
                            "Thanks for being a real one.",
                            "Vibes on vibes with you.",
                            "You make the tough days easier.",
                            "Cheers to us."
                        ],
                        "question": "Besties 4L?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the sister I chose.",
                            "Life is boring without you.",
                            "Thanks for being my listener.",
                            "You're a rare gem."
                        ],
                        "question": "Love you friend!"
                    },
                    "heavy": {
                        "messages": [
                            "You are a once-in-a-lifetime friend.",
                            "I appreciate you more than you know.",
                            "Thanks for always being there.",
                            "You are my chosen family."
                        ],
                        "question": "Love you forever!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Besties. Always got you.",
                    "looping_quotes": [
                        "Besties.",
                        "Always got you.",
                        "Cheers.",
                        "You're a gem."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Real ones are hard to find.",
                            "Glad we're on the same vibe.",
                            "You make life fun, bro.",
                            "Happy Valentine's, man."
                        ],
                        "question": "Bless up!"
                    },
                    "basic": {
                        "messages": [
                            "Thanks for being a real one.",
                            "Vibes on vibes with you.",
                            "You make the tough days easier.",
                            "Cheers to us."
                        ],
                        "question": "My Gee for life."
                    },
                    "sweet": {
                        "messages": [
                            "You are the brother I chose.",
                            "Life is boring without you.",
                            "Thanks for being solid.",
                            "You're a rare gem."
                        ],
                        "question": "Love you bro!"
                    },
                    "heavy": {
                        "messages": [
                            "You are a once-in-a-lifetime friend.",
                            "I appreciate you more than you know.",
                            "Thanks for always being there.",
                            "You are my chosen family."
                        ],
                        "question": "Love you forever!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "My Guy. Always got you.",
                    "looping_quotes": [
                        "My Guy.",
                        "Always got you.",
                        "Cheers.",
                        "Solid."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Real ones are hard to find.",
                            "Glad we're on the same vibe.",
                            "Thank you for being there.",
                            "You make life much more fun."
                        ],
                        "question": "Will you be my Bestie forever?"
                    },
                    "basic": {
                        "messages": [
                            "Thanks for being a real one.",
                            "Vibes on vibes with you.",
                            "You make the tough days easier.",
                            "Cheers to us."
                        ],
                        "question": "Besties 4L?"
                    },
                    "sweet": {
                        "messages": [
                            "You are the family I chose.",
                            "Life is boring without you.",
                            "Thanks for being my listener.",
                            "You're a rare gem."
                        ],
                        "question": "Love you friend!"
                    },
                    "heavy": {
                        "messages": [
                            "You are a once-in-a-lifetime friend.",
                            "I appreciate you more than you know.",
                            "Thanks for always being there.",
                            "You are my chosen family."
                        ],
                        "question": "Love you forever!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Friends for life. Always got your back.",
                    "looping_quotes": [
                        "Friends for life.",
                        "Always got your back.",
                        "To many more vibes.",
                        "You're a gem."
                    ]
                }
            }
        }
    },
    "colleague": {
        "emojis": [
            "💼",
            "☕",
            "💻",
            "📈"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-energy.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Thanks for not being annoying.",
                            "You make work bearable.",
                            "Happy Valentine's Day!",
                            "Coffee on me soon?"
                        ],
                        "question": "Best work buddy."
                    },
                    "basic": {
                        "messages": [
                            "I appreciate your help always.",
                            "You're a great team player.",
                            "Glad we work together.",
                            "Thanks for saving me in meetings."
                        ],
                        "question": "You're cool."
                    },
                    "sweet": {
                        "messages": [
                            "My favorite work bestie.",
                            "I'd actually hang out with you outside work.",
                            "You make the office fun.",
                            "Thanks for the support."
                        ],
                        "question": "You're a star."
                    },
                    "heavy": {
                        "messages": [
                            "You make every project better.",
                            "I'm grateful to have you as a colleague.",
                            "Thanks for being such a great teammate.",
                            "You're a true professional and a friend."
                        ],
                        "question": "Looking forward to more wins!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Work besties. See you at the office.",
                    "looping_quotes": [
                        "Work besties.",
                        "See you at the office.",
                        "Keep winning.",
                        "You're appreciated."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Thanks for not being annoying.",
                            "You make work bearable.",
                            "Happy Valentine's Day!",
                            "Lunch on me soon?"
                        ],
                        "question": "Best work buddy."
                    },
                    "basic": {
                        "messages": [
                            "I appreciate your help always.",
                            "You're a great team player.",
                            "Glad we work together.",
                            "Thanks for saving me in meetings."
                        ],
                        "question": "You're cool."
                    },
                    "sweet": {
                        "messages": [
                            "My favorite work bestie.",
                            "I'd actually hang out with you outside work.",
                            "You make the office fun.",
                            "Thanks for the support."
                        ],
                        "question": "You're a star."
                    },
                    "heavy": {
                        "messages": [
                            "You make every project better.",
                            "I'm grateful to have you as a colleague.",
                            "Thanks for being such a great teammate.",
                            "You're a true professional and a friend."
                        ],
                        "question": "Looking forward to more wins!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Work pals. See you at the office.",
                    "looping_quotes": [
                        "Work pals.",
                        "See you at the office.",
                        "Keep winning.",
                        "You're appreciated."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Thanks for not being annoying.",
                            "You make work bearable.",
                            "Happy Valentine's Day!",
                            "Coffee on me soon?"
                        ],
                        "question": "Best work buddy."
                    },
                    "basic": {
                        "messages": [
                            "I appreciate your help always.",
                            "You're a great team player.",
                            "Glad we work together.",
                            "Thanks for saving me in meetings."
                        ],
                        "question": "You're cool."
                    },
                    "sweet": {
                        "messages": [
                            "My favorite work bestie.",
                            "I'd actually hang out with you outside work.",
                            "You make the office fun.",
                            "Thanks for the support."
                        ],
                        "question": "You're a star."
                    },
                    "heavy": {
                        "messages": [
                            "You make every project better.",
                            "I'm grateful to have you as a colleague.",
                            "Thanks for being such a great teammate.",
                            "You're a true professional and a friend."
                        ],
                        "question": "Looking forward to more wins!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Work besties. See you at the office.",
                    "looping_quotes": [
                        "Work besties.",
                        "See you at the office.",
                        "Keep winning.",
                        "You're appreciated."
                    ]
                }
            }
        }
    },
    "boss": {
        "emojis": [
            "👔",
            "🚀",
            "🎯",
            "🤝"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-corporate.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Happy Valentine's Day!",
                            "Thanks for the opportunity.",
                            "Great leadership.",
                            "Have a nice day!"
                        ],
                        "question": "Best Boss."
                    },
                    "basic": {
                        "messages": [
                            "Thanks for guiding the team.",
                            "I appreciate your patience.",
                            "Glad to be on your team.",
                            "Thanks for the support."
                        ],
                        "question": "You lead well."
                    },
                    "sweet": {
                        "messages": [
                            "Best boss ever. (Raise next?)",
                            "You make work inspiring.",
                            "Thanks for believing in me.",
                            "A true leader."
                        ],
                        "question": "Grateful for you."
                    },
                    "heavy": {
                        "messages": [
                            "Thank you for your incredible leadership.",
                            "I've learned so much from you.",
                            "Your vision is inspiring.",
                            "I appreciate the opportunities you've given me."
                        ],
                        "question": "Happy Valentine's Day, Boss!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Respect. Thank you, Ma'am.",
                    "looping_quotes": [
                        "Respect.",
                        "Thank you, Ma'am.",
                        "Great leadership.",
                        "To more wins."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Happy Valentine's Day, Boss!",
                            "Thanks for the opportunity.",
                            "Great leadership.",
                            "Have a nice day!"
                        ],
                        "question": "Best Boss."
                    },
                    "basic": {
                        "messages": [
                            "Thanks for guiding the team.",
                            "I appreciate your patience.",
                            "Glad to be on your team.",
                            "Thanks for the support."
                        ],
                        "question": "You lead well."
                    },
                    "sweet": {
                        "messages": [
                            "Best boss ever. (Raise next?)",
                            "You make work inspiring.",
                            "Thanks for believing in me.",
                            "A true leader."
                        ],
                        "question": "Grateful for you."
                    },
                    "heavy": {
                        "messages": [
                            "Thank you for your incredible leadership.",
                            "I've learned so much from you.",
                            "Your vision is inspiring.",
                            "I appreciate the opportunities you've given me."
                        ],
                        "question": "Happy Valentine's Day, Boss!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Respect, Boss. Thank you, Sir.",
                    "looping_quotes": [
                        "Respect, Boss.",
                        "Thank you, Sir.",
                        "Great leadership.",
                        "To more wins."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Happy Valentine's Day, Boss!",
                            "Thanks for the opportunity.",
                            "Great leadership.",
                            "Have a nice day!"
                        ],
                        "question": "Best Boss."
                    },
                    "basic": {
                        "messages": [
                            "Thanks for guiding the team.",
                            "I appreciate your patience.",
                            "Glad to be on your team.",
                            "Thanks for the support."
                        ],
                        "question": "You lead well."
                    },
                    "sweet": {
                        "messages": [
                            "Best boss ever. (Raise next?)",
                            "You make work inspiring.",
                            "Thanks for believing in me.",
                            "A true leader."
                        ],
                        "question": "Grateful for you."
                    },
                    "heavy": {
                        "messages": [
                            "Thank you for your incredible leadership.",
                            "I've learned so much from you.",
                            "Your vision is inspiring.",
                            "I appreciate the opportunities you've given me."
                        ],
                        "question": "Happy Valentine's Day, Boss!"
                    }
                },
                "success": {
                    "heading": "YES! 🎉",
                    "message": "Respect, Boss. Thank you.",
                    "looping_quotes": [
                        "Respect, Boss.",
                        "Thank you.",
                        "Great leadership.",
                        "To more wins."
                    ]
                }
            }
        }
    },
    "enemy": {
        "emojis": [
            "💀",
            "🗡️",
            "💔",
            "😐"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-scifi.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I know you dey watch me like DSTV.",
                            "Your eye-red no fit stop my grace.",
                            "Even Shatta Wale say: 'My enemies shame.'",
                            "We are not friends."
                        ],
                        "question": "I'm the one God blessed. Agree?"
                    },
                    "basic": {
                        "messages": [
                            "Keep watching, the show just started.",
                            "Validation? I don't need yours.",
                            "I'm busy winning.",
                            "Grace is natural."
                        ],
                        "question": "Bye!"
                    },
                    "sweet": {
                        "messages": [
                            "I actually pray for you.",
                            "Hope you find peace.",
                            "No bad vibes here.",
                            "Bless up."
                        ],
                        "question": "Peace out."
                    },
                    "heavy": {
                        "messages": [
                            "I know you're watching, so here's some grace to see.",
                            "My light won't dim for your comfort.",
                            "I wish you healing and peace.",
                            "I'm too blessed to be stressed by you."
                        ],
                        "question": "Moving on with love."
                    }
                },
                "success": {
                    "heading": "Victory! 🏆",
                    "message": "Victory is mine. Keep watching.",
                    "looping_quotes": [
                        "Victory is mine.",
                        "Keep watching.",
                        "Nothing can stop me.",
                        "Psalm 23:5 always."
                    ]
                }
            },
            "him": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I know you dey watch me like DSTV.",
                            "Your eye-red no fit stop my grace.",
                            "Even Shatta Wale say: 'My enemies shame.'",
                            "We are not friends."
                        ],
                        "question": "I'm the one God blessed. Agree?"
                    },
                    "basic": {
                        "messages": [
                            "Keep watching, the show just started.",
                            "Validation? I don't need yours.",
                            "I'm busy winning.",
                            "Grace is natural."
                        ],
                        "question": "Bye!"
                    },
                    "sweet": {
                        "messages": [
                            "I actually pray for you.",
                            "Hope you find peace.",
                            "No bad vibes here.",
                            "Bless up."
                        ],
                        "question": "Peace out."
                    },
                    "heavy": {
                        "messages": [
                            "I know you're watching, so here's some grace to see.",
                            "My light won't dim for your comfort.",
                            "I wish you healing and peace.",
                            "I'm too blessed to be stressed by you."
                        ],
                        "question": "Moving on with love."
                    }
                },
                "success": {
                    "heading": "Victory! 🏆",
                    "message": "Victory is mine. Keep watching.",
                    "looping_quotes": [
                        "Victory is mine.",
                        "Keep watching.",
                        "Nothing can stop me.",
                        "Psalm 23:5 always."
                    ]
                }
            },
            "them": {
                "tiers": {
                    "free": {
                        "messages": [
                            "I know you dey watch me like DSTV.",
                            "Your eye-red no fit stop my grace.",
                            "Even Shatta Wale say: 'My enemies shame.'",
                            "We are not friends."
                        ],
                        "question": "I'm the one God blessed. Agree?"
                    },
                    "basic": {
                        "messages": [
                            "Keep watching, the show just started.",
                            "Validation? I don't need yours.",
                            "I'm busy winning.",
                            "Grace is natural."
                        ],
                        "question": "Bye!"
                    },
                    "sweet": {
                        "messages": [
                            "I actually pray for you.",
                            "Hope you find peace.",
                            "No bad vibes here.",
                            "Bless up."
                        ],
                        "question": "Peace."
                    },
                    "heavy": {
                        "messages": [
                            "I know you're watching, so here's some grace to see.",
                            "My light won't dim for your comfort.",
                            "I wish you healing and peace.",
                            "I'm too blessed to be stressed by you."
                        ],
                        "question": "Moving on with love."
                    }
                },
                "success": {
                    "heading": "Victory! 🏆",
                    "message": "Victory is mine. Keep watching.",
                    "looping_quotes": [
                        "Victory is mine.",
                        "Keep watching.",
                        "Nothing can stop me.",
                        "Psalm 23:5 always."
                    ]
                }
            }
        }
    },
    "birthday": {
        "emojis": [
            "🎂",
            "🎉",
            "🎈",
            "🎁"
        ],
        "music": "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
        "flow": {
            "her": {
                "tiers": {
                    "free": {
                        "messages": [
                            "Happy Birthday!",
                            "Wishing you a great day.",
                            "Enjoy your special day!"
                        ],
                        "question": "More life, more wins."
                    },
                    "basic": {
                        "messages": [
                            "Happy Birthday beautiful!",
                            "Hope your day is as amazing as you.",
                            "Cheers to another year around the sun."
                        ],
                        "question": "Enjoy your day to the fullest."
                    },
                    "sweet": {
                        "messages": [
                            "Happy Birthday to someone incredibly special.",
                            "May all your birthday wishes come true.",
                            "You deserve all the happiness today."
                        ],
                        "question": "Celebrate big, you earned it!"
                    },
                    "heavy": {
                        "messages": [
                            "Happy Birthday! May this year bring you endless joy.",
                            "You mean so much to everyone who knows you.",
                            "Here's to a year of massive success and love."
                        ],
                        "question": "Keep shining bright!"
                    }
                },
                "success": {
                    "heading": "Wishes Sent! 🎂",
                    "message": "Happy Birthday! Cheers!",
                    "looping_quotes": [
                        "Happy Birthday!",
                        "Cheers!",
                        "Enjoy your day!",
                        "More Life."
                    ]
                }
            }
        }
    }
    };
    return polishThemeCopy(themes);
});
