import { random, remove } from 'lodash';

export const DefaultGameData = [
    {
        word: 'car',
        url: [
            'https://i.ibb.co/NxSXByw/car-clipart-8.png',
            'https://i.ibb.co/4SLfc0p/car-clipart-19.jpg',
            'https://i.ibb.co/PcYZ1zT/car-clipart-58.gif',
        ],
    },
    {
        word: 'tree',
        url: [
            'https://i.ibb.co/bR5r6g2/tree-clip-art-3.jpg',
            'https://i.ibb.co/7bjxw15/tree-clip-art-18.png',
            'https://i.ibb.co/QNXvV92/tree-clip-art-41.jpg',
        ],
    },
    {
        word: 'sun',
        url: [
            'https://i.ibb.co/1Z5SZVR/1917674.png',
            'https://i.ibb.co/RQPQC5M/1917690.png',
            'https://i.ibb.co/dttVVMc/1917737.jpg',
        ],
    },
    {
        word: 'cup',
        url: [
            'https://i.ibb.co/Pcs3XDf/1129487-coffee-cup-clip-art-png.png',
            'https://i.ibb.co/b25WTFw/cup-transparent-background-5.png',
            'https://i.ibb.co/4dsMLfq/transparent-coffee-cup-23.png',
        ],
    },
    {
        word: 'star',
        url: [
            'https://i.ibb.co/4NfPkmP/star-clip-art-11.png',
            'https://i.ibb.co/rp9m2ZK/star-clip-art-21.jpg',
            'https://i.ibb.co/P4mNCNG/star-clip-art-30.jpg',
        ],
    },
    {
        word: 'book',
        url: [
            'https://i.ibb.co/3BZg2Wv/pcq8yn5-Xi.png',
            'https://i.ibb.co/71y1Bw9/ki-Mb8n9e-T.png',
            'https://i.ibb.co/72gHSry/8c68-Krzri.png',
        ],
    },
    {
        word: 'fly',
        url: [
            'https://i.ibb.co/nnpGrH7/2043827.png',
            'https://i.ibb.co/RYz58yW/2043869.png',
        ],
    },
    {
        word: 'earth',
        url: [
            'https://i.ibb.co/tKcNNtq/clip-art-earth-4.png',
            'https://i.ibb.co/gV3QXJk/clip-art-earth-25.png',
            'https://i.ibb.co/SPTDgm9/clip-art-earth-36.png',
        ],
    },
    {
        word: 'tiger',
        url: [
            'https://i.ibb.co/vkKRkjw/297677.jpg',
            'https://i.ibb.co/B3scmdY/tiger-transparent-background-12.png',
        ],
    },
    {
        word: 'hand',
        url: [
            'https://i.ibb.co/zRMb93K/366-3663085-hand-outline-small-small-hand.jpg',
            'https://i.ibb.co/NKBs8Yj/1816685.png',
        ],
    },
    {
        word: 'apple',
        url: [
            'https://i.ibb.co/k4ctHz7/2076303.png',
            'https://i.ibb.co/4W0yw5n/2076381.png',
            'https://i.ibb.co/5hgQRbK/2076424.png',
        ],
    },
    {
        word: 'orange',
        url: [
            'https://i.ibb.co/P5ySQNF/99416.png',
            'https://i.ibb.co/KyqNMhc/99704.png',
            'https://i.ibb.co/Hx8qdFT/99846.png',
        ],
    },
    {
        word: 'home',
        url: [
            'https://i.ibb.co/fnnRHN5/home-clip-art-3.png',
            'https://i.ibb.co/PYz71WW/home-clip-art-47.png',
            'https://i.ibb.co/S3zV1Bq/home-clip-art-57.png',
        ],
    },
    {
        word: 'umbrella',
        url: [
            'https://i.ibb.co/vV8pzZ9/564376.gif',
            'https://i.ibb.co/rHBQ9cc/564414.png',
            'https://i.ibb.co/hY5HMMz/605480-umbrella-clipart-png.jpg',
        ],
    },
    {
        word: 'butterfly',
        url: [
            'https://i.ibb.co/rdC7hwz/93-938580-free-png-download-butterfly-yellow-clipart-png-photo.jpg',
            'https://i.ibb.co/GQ6XnjN/828356.jpg',
            'https://i.ibb.co/VjGDvT4/transparent-butterfly-png-8.png',
        ],
    },
    {
        word: 'unicorn',
        url: [
            'https://i.ibb.co/tMtpvSN/1357132.png',
            'https://i.ibb.co/Z8cgWKc/unicorn-clipart-transparent-13.png',
            'https://i.ibb.co/k3MfbJH/unicorn-clipart-transparent-16.png',
        ],
    },
    {
        word: 'present',
        url: [
            'https://i.ibb.co/PT5W1Zn/1803804.png',
            'https://i.ibb.co/2YVZkFT/1803880.png',
            'https://i.ibb.co/c35jF5f/birthday-present-transparent-18.png',
        ],
    },
    {
        word: 'giraffe',
        url: [
            'https://i.ibb.co/gvbQMXk/1310711-cute-giraffe-png.jpg',
            'https://i.ibb.co/cJTc1ny/1799089.png',
            'https://i.ibb.co/k98D94W/2038552.jpg',
        ],
    },
    {
        word: 'grass',
        url: [
            'https://i.ibb.co/w6ZKrWX/50639.jpg',
            'https://i.ibb.co/FzkKyKk/538698.png',
            'https://i.ibb.co/QD0FBL6/538722.png',
        ],
    },
    {
        word: 'pumpkin',
        url: [
            'https://i.ibb.co/WxG4C6y/pumpkin-clip-art-14.jpg',
            'https://i.ibb.co/0YmSLwp/6-Try9qa-TK.png',
            'https://i.ibb.co/fr2kK0Y/5i-RX6g-E4-T.png',
        ],
    },
    {
        word: 'clock',
        url: [
            'https://i.ibb.co/fHkDsYs/5i-RKp-Gn4-T.jpg',
            'https://i.ibb.co/vjXLVYy/8-Tz-Kpj-Mac.png',
            'https://i.ibb.co/gD690T8/Acbj-GXagi.gif',
        ],
    },
    {
        word: 'laddar',
        url: [
            'https://i.ibb.co/86Xcjby/323683.png',
            'https://i.ibb.co/1z4Sx71/323759.png',
            'https://i.ibb.co/PYVsg0Q/323771.png',
        ],
    },
    {
        word: 'frog',
        url: [
            'https://i.ibb.co/CtwfshC/254210.png',
            'https://i.ibb.co/Tk8WqfY/254238.png',
            'https://i.ibb.co/S3TvsRQ/254282.jpg',
        ],
    },
    {
        word: 'moon',
        url: [
            'https://i.ibb.co/tp5WrSH/4-46981-cartoon-moon-png-transparent-background-moon-clipart.png',
            'https://i.ibb.co/4KjHWqQ/12-123586-png-file-svg-moon-svg.png',
            'https://i.ibb.co/sgv7hzn/15-155581-download-moon-crescent-clipart-transparent-png-half-moon.png',
        ],
    },
    {
        word: 'ball',
        url: [
            'https://i.ibb.co/Y0WQP0H/432220.png',
            'https://i.ibb.co/9Vj3mrJ/765927.png',
            'https://i.ibb.co/L8t1btS/1775695.png',
        ],
    },
    {
        word: 'water',
        url: [
            'https://i.ibb.co/F8NHZ9j/kc85-BXn9i.jpg',
            'https://i.ibb.co/Xx4BrgZ/k-TKor-ELpc.jpg',
        ],
    },
    {
        word: 'music',
        url: [
            'https://i.ibb.co/L9w8m9k/10799.jpg',
            'https://i.ibb.co/QcyN7J6/88128.png',
            'https://i.ibb.co/fGrfdGg/609020.jpg',
        ],
    },
    {
        word: 'piano',
        url: [
            'https://i.ibb.co/ZXW3vQx/1228562.gif',
            'https://i.ibb.co/fGLLm07/piano-clipart-7.jpg',
            'https://i.ibb.co/fQsBZrT/piano-clipart-30.gif',
        ],
    },
    {
        word: 'dog',
        url: [
            'https://i.ibb.co/j8tScfk/184-1842586-dog-bulldog-puppy-cartoon-cute-bulldog-drawing.png',
            'https://i.ibb.co/412rQdH/cartoon-dog-transparent-23.png',
            'https://i.ibb.co/QbHK17s/cartoon-dog-transparent-24.png',
        ],
    },
    {
        word: 'cat',
        url: [
            'https://i.ibb.co/PhycB8M/866122.png',
            'https://i.ibb.co/ngDXqWJ/39-397717-clip-art-cat-png.jpg',
            'https://i.ibb.co/X3tkpnf/6cp6-Rr5-Ei.png',
        ],
    },
    {
        word: 'eye',
        url: [
            'https://i.ibb.co/SwpCSYT/1717918.png',
            'https://i.ibb.co/KDH67Zd/1717951.gif',
            'https://i.ibb.co/WkTx0kq/creepy-eyes-transparent-6.png',
        ],
    },
    {
        word: 'baby',
        url: [
            'https://i.ibb.co/SN7DctH/baby-clip-art-11.png',
            'https://i.ibb.co/kqkgMGF/baby-transparent-background-7.png',
            'https://i.ibb.co/GdWh5M2/transparent-baby-5.png',
        ],
    },
    {
        word: 'bus',
        url: [
            'https://i.ibb.co/vm36Ztg/Rk-TK5r-Bij.png',
            'https://i.ibb.co/s5Vj9tQ/Big-E895j-T.png',
            'https://i.ibb.co/84dSJmr/6-Tr6xjdkc.png',
        ],
    },
    {
        word: 'fish',
        url: [
            'https://i.ibb.co/80mw0x1/1373920.gif',
            'https://i.ibb.co/X85SSbc/1055641.png',
            'https://i.ibb.co/1Mjqkqc/fish-clipart-transparent-9.png',
        ],
    },
    {
        word: 'octopus',
        url: [
            'https://i.ibb.co/s1cCDgW/82771.png',
            'https://i.ibb.co/Bn8wgQX/82821.jpg',
            'https://i.ibb.co/ZJD0mRy/zc-Xob4-Gri.png',
        ],
    },
    {
        word: 'rainbow',
        url: [
            'https://i.ibb.co/nmQjYwT/piqrek-EAT.png',
            'https://i.ibb.co/yfSQ0KM/8-TGbqe6dc.png',
            'https://i.ibb.co/HXcS51m/8c-AErr5-Ki.png',
        ],
    },
    {
        word: 'duck',
        url: [
            'https://i.ibb.co/MDTMkz8/duck-clipart-9.png',
            'https://i.ibb.co/tLMcPgS/duck-clipart-20.png',
            'https://i.ibb.co/5B549QQ/duck-clipart-28.jpg',
        ],
    },
    {
        word: 'deer',
        url: [
            'https://i.ibb.co/fphYC7R/5i-Rrx6z5-T.png',
            'https://i.ibb.co/9c2MtQy/mule-deer-silhouette-clip-art-9.png',
        ],
    },
    {
        word: 'lion',
        url: [
            'https://i.ibb.co/XWSxxs3/1316177.png',
            'https://i.ibb.co/nkwy8X5/1316184.png',
            'https://i.ibb.co/8b5BCZ8/1316189.png',
        ],
    },
    {
        word: 'monkey',
        url: [
            'https://i.ibb.co/nCFYhdV/6ip6-R5z-AT.png',
            'https://i.ibb.co/0M3JPtF/6-Bigqb-Bc8.png',
            'https://i.ibb.co/vswpyQD/8c-E6r9-K6i.png',
        ],
    },
    {
        word: 'zebra',
        url: [
            'https://i.ibb.co/pW6wXJD/6635.jpg',
            'https://i.ibb.co/7pTSs3K/6670.gif',
            'https://i.ibb.co/2NF1GVq/574195.png',
        ],
    },
    {
        word: 'banana',
        url: [
            'https://i.ibb.co/k04Tyrj/5c-RGo-MEca.png',
            'https://i.ibb.co/kQtd8kW/8-Tzn-Lgp-Rc.jpg',
            'https://i.ibb.co/KVmxF5D/qi-BX9dog-T.png',
        ],
    },
    {
        word: 'ship',
        url: [
            'https://i.ibb.co/BT4j3kW/ship-clipart-6.png',
            'https://i.ibb.co/DCXdfhV/ship-clipart-7.jpg',
        ],
    },
    {
        word: 'candy',
        url: [
            'https://i.ibb.co/DKy4XVj/candy-clip-art-14.jpg',
            'https://i.ibb.co/ZKWrqsQ/candy-clip-art-23.png',
            'https://i.ibb.co/9nwyV8P/candy-clip-art-40.png',
        ],
    },
    {
        word: 'white',
        url: [
            'https://i.ibb.co/xFK1YLm/white-color.png',
        ],
    },
    {
        word: 'bear',
        url: [
            'https://i.ibb.co/hHQbFzK/154-1541457-clip-art-teddy-baby-bear-from-goldilocks.jpg',
            'https://i.ibb.co/dLqVzwr/1446455.png',
            'https://i.ibb.co/mbxpB8T/bear-clipart-transparent-background-1.png',
        ],
    },
    {
        word: 'green',
        url: [
            'https://i.ibb.co/x2KNMxZ/greencolor.png',
        ],
    },
    {
        word: 'yellow',
        url: [
            'https://i.ibb.co/xqxJ4v5/yellowcolor.jpg',
        ],
    },
    {
        word: 'purple',
        url: [
            'https://i.ibb.co/3RRPKkr/9400-D3-png.png',
        ],
    },
    {
        word: 'blue',
        url: [
            'https://i.ibb.co/0X5ztsk/11u6-EX1-HPSL-SX331-BO1-204-203-200.jpg',
        ],
    },
    {
        word: 'red',
        url: [
            'https://i.ibb.co/YRx3WDL/Cadmium-red-nr-2-painted-swatch-Lipscher-225-opt.jpg',
        ],
    },
    {
        word: 'jellyfish',
        url: [
            'https://i.ibb.co/HCLV0H4/46-464816-jellyfish-clipart-transparent-background.jpg',
            'https://i.ibb.co/0GDD3pw/823331.jpg',
            'https://i.ibb.co/4sbHg4r/ri-Ln7o-Me-T.png',
        ],
    },
    {
        word: 'dress',
        url: [
            'https://i.ibb.co/Pc2R7Z3/n684214.jpg',
            'https://i.ibb.co/ssKd4kj/transparent-clothes-pictures-10.png',
        ],
    },
    {
        word: 'pink',
        url: [
            'https://i.ibb.co/H7Y5ZVx/WARM-BABY-PINK-240x.jpg',
        ],
    },
    {
        word: 'black',
        url: [
            'https://i.ibb.co/vjnxc05/Peach-stone-black-painted-swatch-12010-opt.jpg',
        ],
    },
    {
        word: 'one',
        url: [
            'https://i.ibb.co/kh2yfSG/zi-Xoxpp-XT.png',
        ],
    },
    {
        word: 'two',
        url: [
            'https://i.ibb.co/DV4r8hh/356147.png',
            'https://i.ibb.co/QvTKNhg/356158.gif',
        ],
    },
    {
        word: 'three',
        url: [
            'https://i.ibb.co/SfGqSjq/123557.png',
        ],
    },
    {
        word: 'four',
        url: [
            'https://i.ibb.co/dQjjNHR/43056.jpg',
            'https://i.ibb.co/zZ1Jj2q/43060.png',
        ],
    },
    {
        word: 'five',
        url: [
            'https://i.ibb.co/SNzmSSQ/1407743.png',
            'https://i.ibb.co/JB4NLfN/1407806.png',
        ],
    },
    {
        word: 'six',
        url: [
            'https://i.ibb.co/PwgrR6C/52270.png',
        ],
    },
    {
        word: 'seven',
        url: [
            'https://i.ibb.co/31z3Mn6/n716692.png',
        ],
    },
    {
        word: 'eight',
        url: [
            'https://i.ibb.co/L6FpQYy/561809.png',
        ],
    },
    {
        word: 'nine',
        url: [
            'https://i.ibb.co/98hC4HL/43578.jpg',
        ],
    },
    {
        word: 'ten',
        url: [
            'https://i.ibb.co/rHN2BXW/207474.jpg',
            'https://i.ibb.co/dGLdTD8/241734.png',
        ],
    },
    {
        word: 'ice cream',
        url: [
            'https://i.ibb.co/sp4M1Hv/ice-cream-cone-clip-art-10.png',
            'https://i.ibb.co/kMydR0F/ice-cream-cone-clip-art-14.png',
            'https://i.ibb.co/F6qsFZ3/ice-cream-cone-clip-art-32.jpg',
        ],
    },
    {
        word: 'elsa',
        url: [
            'https://i.ibb.co/ThGpmKy/82943198-frozen-movie-elsa-hd-wallpaper-21.jpg',
            'https://i.ibb.co/RTg0c6F/Fan-Art-Portrait-of-Elsa-from-Frozen-by-Noel-Lopez-768x960.jpg',
            'https://i.ibb.co/QjGJx9f/frozen.png',

        ],
    },
    {
        word: 'merry christmas',
        url: [
            'https://i.ibb.co/YZNDWpg/45923981.jpg',
            'https://i.ibb.co/pR9CGR3/christmas-background-santa-s-friends-23-2147973591.jpg',
            'https://i.ibb.co/RS7Rqhp/merry-christmas-card-44665-201.jpg',
        ],
    },
    {
        word: 'gray',
        url: [
            'Graukarte.svg',
        ],
    },
    {
        word: 'family',
        url: [
            'https://i.ibb.co/hsmjVTs/family-clip-art-13.png',
            'https://i.ibb.co/w0wBQWV/family-clip-art-24.png',
            'https://i.ibb.co/vzXZvpp/family-clip-art-31.jpg',
        ],
    },
    {
        word: 'bed',
        url: [
            'https://i.ibb.co/svBjm6r/928866.png',
            'https://i.ibb.co/2MQBXy7/944022.jpg',
            'https://i.ibb.co/TRVtxxV/1214699.jpg',
        ],
    },
    {
        word: 'santa',
        url: [
            'https://i.ibb.co/Wgf13bW/santa-clip-art-18.jpg',
            'https://i.ibb.co/W6Y9tNm/santa-clip-art-36.png',
            'https://i.ibb.co/x6F7GYp/santa-clip-art-37.png',
        ],
    },
    {
        word: 'pillow',
        url: [
            'https://i.ibb.co/QCm159V/55916.jpg',
            'https://i.ibb.co/0ygmpZT/55917.png',
            'https://i.ibb.co/BNZhPP8/55943.jpg',
        ],
    },
    {
        word: 'google',
        url: [
            'https://i.ibb.co/6gvSjKZ/371872.jpg',
        ],
    },
    {
        word: 'lego',
        url: [
            'https://i.ibb.co/9ZkJz3z/222900.png',
            'https://i.ibb.co/j6jpw23/222903.png',
            'https://i.ibb.co/8dDyQ9f/314123.png',
        ],
    },
    {
        word: 'pencil',
        url: [
            'https://i.ibb.co/vDJNtgd/22511.png',
            'https://i.ibb.co/2NRnXjD/30421.gif',
        ],
    },
    {
        word: 'fire',
        url: [
            'https://i.ibb.co/bsD159m/675257.png',
            'https://i.ibb.co/GFs50MS/1351752.png',
        ],
    },
    {
        word: 'fox',
        url: [
            'https://i.ibb.co/X524Pk3/gce-Eedboi.png',
        ],
    },
    {
        word: 'elephant',
        url: [
            'https://i.ibb.co/HXv6KCZ/722248.png',
            'https://i.ibb.co/x7YphpC/963329.png',
            'https://i.ibb.co/mGk78bk/elephant-clipart-transparent-background-6.png',
        ],
    },
    {
        word: 'grape',
        url: [
            'https://i.ibb.co/pZW0VhX/1331563.png',
            'https://i.ibb.co/NmcYTN6/1356056.png',
        ],
    },
    {
        word: 'hat',
        url: [
            'https://i.ibb.co/4dZ1xKC/190-1909557-new-era-cap-company.png',
            'https://i.ibb.co/njpGJfd/730676.png',
            'https://i.ibb.co/5j3cRxY/new-years-hat-transparent-15.png',
        ],
    },
    {
        word: 'kite',
        url: [
            'https://i.ibb.co/zrjr0BN/162167.png',
            'https://i.ibb.co/7jcyTVR/302986.gif',
        ],
    },
    {
        word: 'lamp',
        url: [
            'https://i.ibb.co/QQfHZth/78092.png',
            'https://i.ibb.co/BzfVXmf/78099.png',
        ],
    },
    {
        word: 'net',
        url: [
            'https://i.ibb.co/jDywr4j/94879.png',
        ],
    },
    {
        word: 'pig',
        url: [
            'https://i.ibb.co/34s7dsF/262073.png',
            'https://i.ibb.co/LxxPC31/344716.png',
            'https://i.ibb.co/d2m3040/344738.png',
        ],
    },
    {
        word: 'queen',
        url: [
            'https://i.ibb.co/L6rp0fw/124611.jpg',
            'https://i.ibb.co/mXF8V28/354207.png',
        ],
    },
    {
        word: 'rope',
        url: [
            'https://i.ibb.co/WHqK6vf/41-411344-objects-rope-rope-png.jpg',
            'https://i.ibb.co/VpPd3Jt/1383316.gif',
        ],
    },
    {
        word: 'table',
        url: [
            'https://i.ibb.co/TP0cZMF/740219.png',
            'https://i.ibb.co/yqcVVd8/1961887.png',
        ],
    },
    {
        word: 'vase',
        url: [
            'https://i.ibb.co/Vgpv1Yh/64531.png',
            'https://i.ibb.co/9GMKtjY/64543.png',
        ],
    },
    {
        word: 'window',
        url: [
            'https://i.ibb.co/61HkvJ9/n992109.jpg',
            'https://i.ibb.co/zfpv0Z4/window-clipart-25.jpg',
        ],
    },
    {
        word: 'xylophone',
        url: [
            'https://i.ibb.co/w6BVvcD/Lcd5-KBGxi.jpg',
        ],
    },
    {
        word: 'bird',
        url: [
            'https://i.ibb.co/CKnbLFy/bird-clip-art-6.png',
            'https://i.ibb.co/RDy7tyS/bird-clip-art-18.png',
            'https://i.ibb.co/rpgz8w3/bird-clip-art-24.png',
        ],
    },
    {
        word: 'flower',
        url: [
            'https://i.ibb.co/RYbCtBp/130-1307906-outside-sea-green-inside-yellow-flower-png-clipart.jpg',
            'https://i.ibb.co/88zWg1n/free-flower-clipart-transparent-background-18.png',
            'https://i.ibb.co/9TVn5J7/851131.png',
        ],
    },
    {
        word: 'jump',
        url: [
            'https://i.ibb.co/7yKPgJL/1980845.jpg',
            'https://i.ibb.co/c3nYTG3/1980759.jpg',
            'https://i.ibb.co/D5fJ4kT/1980864.jpg',
        ],
    },
    {
        word: 'cold',
        url: [
            'https://i.ibb.co/LhJ8H3X/cold-clip-art-9.jpg',
            'https://i.ibb.co/Jth8pZR/41971.jpg',
        ],
    },
    {
        word: 'snowman',
        url: [
            'https://i.ibb.co/n15RJRg/p-Tq8q-Ax-Bc.png',
            'https://i.ibb.co/cFCLGxw/yck-Kj7-Eqi.gif',
        ],
    },
    {
        word: 'snow',
        url: [
            'https://i.ibb.co/b76SC2k/843841.jpg',
            'https://i.ibb.co/xsRtJvX/841190.gif',
        ],
    },
    {
        word: 'sit',
        url: [
            'https://i.ibb.co/KmB2x5n/573279.png',
            'https://i.ibb.co/r0mNcsB/366503.png',
        ],
    },
    {
        word: 'run',
        url: [
            'https://i.ibb.co/Brb274Z/man-running-silhouette-vector-24.png',
            'https://i.ibb.co/8M0xwM5/n57301.jpg',
            'https://i.ibb.co/X2WWSx5/n1220191.jpg',
        ],
    },
    {
        word: 'beach',
        url: [
            'https://i.ibb.co/FW0szRX/491044.jpg',
            'https://i.ibb.co/89BFZLw/491049.jpg',
        ],
    },
    {
        word: 'eat',
        url: [
            'https://i.ibb.co/vw9Ty1B/93-931161-19-person-eating-pizza-clip-free-stock-huge.jpg',
            'https://i.ibb.co/VLSM3dL/317689.png',
        ],
    },
    // {
    //     word: '',
    //     url: [
    //         '',
    //         '',
    //         '',
    //     ],
    // },
];


export function randomValue(arr) {
    return arr[random(arr.length-1)];
}

function getRandomQuestion(word, differiculty=1) {
    let wordArr = word.split('');
    for (var i=0; i<differiculty; i++){
        let questionCharIndex = -1;
        while (questionCharIndex === -1 || wordArr[questionCharIndex] === ' ') {
            questionCharIndex = random(wordArr.length-1);
        }
        wordArr[questionCharIndex] = '_';
    }
    return wordArr.join('');
}

export function getGameData() {

    const storageData = localStorage.getItem('spelling-game-data');
    if (storageData) {
        return JSON.parse(storageData);
    }

    localStorage.setItem('spelling-game-data', JSON.stringify(DefaultGameData));

    return DefaultGameData;
}

export function resetDefaultData() {
    localStorage.setItem('spelling-game-data', JSON.stringify(DefaultGameData));
}

export function removeWord(i) {
    const gameData = getGameData();
    const newGameData = remove(gameData, (n,index) => index!==i );
    localStorage.setItem('spelling-game-data', JSON.stringify(newGameData));
}

export function updateWord(i, word) {
    const gameData = getGameData();
    if (gameData[i].word === word) {
        return;
    }
    gameData[i].word = word;

    localStorage.setItem('spelling-game-data', JSON.stringify(gameData));
}

export function updateURL(i, j, newUrl) {
    const gameData = getGameData();
    let urls = gameData[i].url;
    if (newUrl === urls[j]) {
        return;
    }
    if (newUrl) {
        urls[j] = newUrl;
    } else {
        remove(urls, (n,index) => index===j);
    }
    localStorage.setItem('spelling-game-data', JSON.stringify(gameData));
}

export function addURL(i, newUrl) {
    if (!newUrl) {
        return;
    }
    const gameData = getGameData();
    let urls = gameData[i].url;
    urls.push(newUrl);
    localStorage.setItem('spelling-game-data', JSON.stringify(gameData));
}

export const getRandomData = ({ differiculty=1 }={}) => {
    const randomObj = randomValue(getGameData());
    const reObj = {
        word: randomObj.word,
        question: getRandomQuestion(randomObj.word, differiculty),
        url: randomValue(randomObj.url),
    };
    return reObj;
}

export const addNewWord = (newWord) => {
    const gameData = getGameData();
    gameData.unshift({word: newWord, url:[]});
    localStorage.setItem('spelling-game-data', JSON.stringify(gameData));
}

export const importData = (newData) => {
    localStorage.setItem('spelling-game-data', newData);
}
