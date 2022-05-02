var storyContent = ﻿{"inkVersion":19,"root":[["^The Supplemental Nutrition Assistance Program (SNAP), formerly known as food stamps, is available to households whose income is 130% below the poverty line. Choose your character to experience life as a prospective participant in SNAP.","\n","ev","str","^Alex","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Sam","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["^ ",{"->":"Alex"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["^ ",{"->":"Sam"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Alex":[[{"#":"CLEAR"},"^You’re a single parent of three. You make $2,200 per month and have almost $10,000 in student debt. You’re struggling to make ends meet and considering applying for SNAP? Should you apply?","\n","ev","str","^Yes, food stamps could help me feed my family.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No. Things are hard, but I can handle them on my own.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"AlexSnap"},"\n",{"#f":5}],"c-1":["^ ",{"->":"NoSnap"},"\n",{"#f":5}]}],{"#f":1}],"Sam":[[{"#":"CLEAR"},"^You and your partner work at the same restaurant. You have a joint monthly income of $1,700, and you’re struggling to support yourselves and your son. You’re considering applying for SNAP. Should you apply?","\n","ev","str","^Yes, food stamps could help me feed my family","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No. Things are hard, but I can handle them on my own.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"SamSnap"},"\n",{"#f":5}],"c-1":["^ ",{"->":"NoSnap"},"\n",{"#f":5}]}],{"#f":1}],"NoSnap":[[{"#":"CLEAR"},"^You continue to struggle to make ends meet. You do not join the 42 million people across the country who are registered for SNAP.","\n","ev","str","^Play Again?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"#":"RESTART"},"\n",{"#f":5}]}],{"#f":1}],"AlexSnap":[[{"#":"CLEAR"},"^Unfortunately, the net monthly income for a four person household has to be less than $2,184. Your income is slightly too high. You continue to struggle to make ends meet and do not join the 42 million people across the country who are registered for SNAP.","\n","ev","str","^Play Again?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"#":"RESTART"},"\n",{"#f":5}]}],{"#f":1}],"SamSnap":[[{"#":"CLEAR"},"^The net monthly income for a three person household has to be less than $1,812. You and your partner make $1,700 per month, which means you qualify for SNAP benefits! You’re able to join the 42 million people across the country who are registered for SNAP. How much money does your family of three receive from SNAP per month?","\n","ev","str","^Less than $100.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^$100 to $200","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^$200 to $300","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^$300 to $400","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^More than $400","/str","/ev",{"*":".^.c-4","flg":20},{"c-0":["^ ",{"->":"SamSnap2"},"\n",{"#f":5}],"c-1":["^ ",{"->":"SamSnap2"},"\n",{"#f":5}],"c-2":["^ ",{"->":"SamSnap2"},"\n",{"#f":5}],"c-3":["^ ",{"->":"SamSnap2"},"\n",{"#f":5}],"c-4":["^ ",{"->":"SamSnap2"},"\n",{"#f":5}]}],{"#f":1}],"SamSnap2":[[{"#":"CLEAR"},"^SNAP benefits increased during the pandemic from an average of $240 per month for a family of three to $520 per month for a family of three.","\n","^You’ve registered for SNAP and are going to a store to shop for dinner after a long shift at the restaurant. You go to:","\n","ev","str","^A dollar store","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^A local grocery store","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"DollarStore"},"\n",{"#f":5}],"c-1":["^ ",{"->":"LocalStore"},"\n",{"#f":5}]}],{"#f":1}],"DollarStore":[{"#":"CLEAR"},"^Stores with cheaper options such as dollar stores and convenience stores make up about 68% of all SNAP authorized retailers, so it’ll be easy to find a store near you that accepts SNAP. Food will likely be cheaper than it would be at a local grocery store, but there might be fewer healthy options.","\n",{"->":"TiredStore"},{"#f":1}],"LocalStore":[{"#":"CLEAR"},"^Local grocery stores make up about 3% of all SNAP authorized retailers, so it might be difficult to find a local grocery store near you that accepts SNAP. If you do find a store like this, food will likely be more expensive than it would be at a dollar store, but there will be more healthy options.","\n",{"->":"TiredStore"},{"#f":1}],"TiredStore":[["^You arrive at the store, and you’re really tired from your long day of work. Should you buy:","\n","ev","str","^Raw chicken to cook at home","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Prepared rotisserie chicken","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"RawChicken"},"\n",{"#f":5}],"c-1":["^ ",{"->":"RotisserieChicken"},"\n",{"#f":5}]}],{"#f":1}],"RawChicken":[[{"#":"CLEAR"},"^You buy the raw chicken, but it takes you longer to prepare dinner. You go to bed later than you wanted to and are exhausted the next day. You also want to buy some other groceries for your family. What should you buy?","\n","ev","str","^Fresh fruits and vegetables","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Canned ravioli","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"FruitsAndVegetables"},"\n",{"#f":5}],"c-1":["^ ",{"->":"CannedRavioli"},"\n",{"#f":5}]}],{"#f":1}],"RotisserieChicken":[[{"#":"CLEAR"},"^Sadly, SNAP doesn’t cover hot food. You have to buy the raw chicken, so it takes you longer to prepare dinner. You go to bed later than you wanted to and you’re exhausted the next day. You also want to buy some other groceries for your family. What should you buy?","\n","ev","str","^Fresh fruits and vegetables","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Canned ravioli","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"FruitsAndVegetables"},"\n",{"#f":5}],"c-1":["^ ",{"->":"CannedRavioli"},"\n",{"#f":5}]}],{"#f":1}],"FruitsAndVegetables":[{"#":"CLEAR"},"^Your family loves the fresh fruit but it eats up $20 of your credits. You now have fewer credits left.","\n","^[Continue] ",{"->":"FunFact"},"\n",{"#f":1}],"CannedRavioli":[{"#":"CLEAR"},"^Your diet is lacking produce, but you’ve only used $5 of your credits.","\n","^[Continue] ",{"->":"FunFact"},"\n",{"#f":1}],"FunFact":[[{"#":"CLEAR"},"^Before 2022, SNAP benefits averaged $240 per month for a three-person household. Studies showed SNAP allotments came $10-11 short of what food insecure people needed to acquire enough healthy food. Whether the recent increases will be enough to cover the shortfall is yet to be seen.","\n","ev","str","^Play Again?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"#":"RESTART"},"\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};