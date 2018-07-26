var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("strangers5_second_friend", "strangers5_first_stranger", "FillerFriend_FillerFriend", "FillerStranger_FillerStranger", "strangers5_second_stranger", "strangers5_first_friend"))))
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [
  ["sep", "Separator", { }],
  ["setcounter", "__SetCounter__", { }],
  ["intro", "Form", {
    html: { include: "example_intro.html" },
    validators: {
      age: function (s) { if (s.match(/^\d+$/)) return true; 
                           else return "Bad value for ‘age’"; }
      }
  } ],
    ["practice", "DashedSentence", 
     {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", 
     {s: "This is another practice sentence with a practice question following it."},
                 "Separator", {normalMessage: "Get ready for the question..."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              hasCorrect: false, randomOrder: false,
                              q: "How would you like to answer this question?",
                              as: ["Press 1 or click here for this answer.",
                                   "Press 2 or click here for this answer.",
                                   "Press 3 or click here for this answer."]}],
    ["practice", "DashedSentence", 
     {s: "This is the last practice sentence before the experiment begins."}],

    
[["strangers5_second_friend", 1], "DashedSentence", {s: "You_are_at_a_music_festival_and_your_best_friend_comments: That's_the_DJ who_played at_your_wedding in_the_summer of_2014_and became_famous_the year_after."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_friend", 2], "DashedSentence", {s: "You_are_having_dinner_with_your_dad_at_a_restaurant_when_he_says: This_greasy_food is_terrible for_your_ulcer but_it's_an old_favorite_and those_are_hard to_give_up."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_friend", 3], "DashedSentence", {s: "You_are_waiting_for_a_bus_when_your_aunt_tells_you: Your_necklace_looks like_the one_your_mother wears_for_very special_occasions_only because_it_is so_precious_to_her."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_friend", 4], "DashedSentence", {s: "You_are_lighting_up_a_cigarette_outside_of_work_when_an_old_colleague_tells_you: You_shouldn't_smoke: that's_what killed_your_father more_than_ten years_ago_and I_still_remember."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_friend", 5], "DashedSentence", {s: "You_are_taking_out_the_trash_when_your_neighbor_tells_you: Raccoons_here_are bigger_than in_your_neighborhood in_the_suburbs of_Miami_and they_are_pretty big_over_there."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_friend", 6], "DashedSentence", {s: "You_are_watering_the_plants_in_your_front_yard_when_you_husband_tells_you: Your_marigolds_look more_gorgeous than_your_sister's and_she's_a professional_gardener_with years_of_experience."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you know the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 7], "DashedSentence", {s: "You_are_browsing_in_a_new_yarn_store_when_the_owner_comments: This_beautiful_yarn is_dyed in_my_hometown near_the_border with_Canada,_where they_have_excellent wool."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Is the yarn made near Canada?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 8], "DashedSentence", {s: "You_are_lifting_weights_at_the_gym_when_a_stranger_says_to_you: This_gym_is very_close to_my_house and_not_far from_work,_so it_is_really convenient."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Does the speaker say that the gym is convenient?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 9], "DashedSentence", {s: "You_are_at_a_jewelry_store_and_the_jeweler_tells_you: This_diamond_engagement ring_looks like_my_mother's, which_she_still wears_sometimes_when she_dresses_up for_fancy_occasions."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Does the ring look like a ring from someone's mother?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 10], "DashedSentence", {s: "You_are_taking_your_cat_to_the_vet_when_another_pet_owner_comments: Your_cat_looks as_sick as_my_aunt's did_before_it got_surgery_and completely_recovered_after a_little_while."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect:"Yes"e, randomOrder: false,
  q: "Does the cat look sick?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 11], "DashedSentence", {s: "You_are_picking_up_a_prescription_from_the_pharmacy_and_a_new_pharmacist_tells_you: You_have_the same_eyes as_my_late mother_who_was very_kind_and always_tried_to help_others."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you picking up a prescription?", as: ["Yes", "No"]}
]
,
[["strangers5_first_stranger", 12], "DashedSentence", {s: "You_are_on_a_bus_when_an_old_song_starts_playing_on_the_radio_and_another_passenger_says: They_played_this same_song at_my_father's funeral_and_everybody started_crying:_it was_very_moving for_me."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Is there a song playing on the radio?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 13], "DashedSentence", {s: "You_are_on_holiday_at_a_beach_resort,_when_a_local_says: We_hadn't_had strong_currents since_your_birthday last_year:_it was_dangerous_even for_the_lifeguards, who_are_great_swimmers."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 14], "DashedSentence", {s: "You_are_eating_at_the_counter_in_a_diner_when_another_customer_says: These_pancakes_are like_the ones_your_grandma made_when_we were_kids_and we_would_beg her_to_make_them_for_us."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 15], "DashedSentence", {s: "You_are_at_the_dentist's_office_when_a_stranger_tells_you: Dental_care_is not_covered by_your_insurance, so_this_will be_expensive_and probably_painful_too, unfortunately."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 16], "DashedSentence", {s: "You_are_waiting_in_line_in_a_cafeteria_when_the_woman_in_front_of_you_comments: These_luscious_cakes aren't_good for_your_diabetes but_they_are a_treat_every now_and_then for_me."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 17], "DashedSentence", {s: "You_are_waiting_to_see_a_specialist_when_another_patient_tells_you: I_saw_a car_crash near_your_apartment today,_right_opposite the_pharmacy:_it was_very_scary for_me."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_second_stranger", 18], "DashedSentence", {s: "You_are_ordering_Chinese_takeout_from_a_restaurant_that_you_never_visited_before_and_the_employee_comments: Pork_dumplings_always remind_me of_your_cousin because_he_really likes_them_and eats_them_almost every_day."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you unfamiliar with the person who was speaking?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 19], "DashedSentence", {s: "You_are_buying_cookies_at_a_bakery_when_your_roommate_tells_you: They_use_flour and_oats from_my_family's farm_down_by the_lake,_so those_ingredients_are organic."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Are you buying ingredients at an outdoor market?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 20], "DashedSentence", {s: "You_are_on_a_bus_when_your_best_friend_says: That_blond_woman reminds_me of_my_ex-wife when_she_was much_younger_and a_bit_more slender."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Is the speaker talking about a red-haired woman?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 21], "DashedSentence", {s: "You_are_waiting_at_a_doctor's_practice_when_your_mother_tells_you: This_month_they were_late with_my_bill and_the_insurance company_complained,_so let's_hope_it won't_happen_again."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Are you waiting at the dentist?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 22], "DashedSentence", {s: "You_are_next_to_your_aunt_on_a_park_bench_who_tells_you: Very_sadly,_since the_death of_my_husband, this_park_isn't the_same_and it_probably_never will_be."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Are you sitting on the grass in the park?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 23], "DashedSentence", {s: "You_are_waiting_to_check_in_for_your_flight_when_your_dad_comments: This_airline_is chaotic:_they lost_my_luggage twice_in_the last_month_and they_are_still processing_the_compensation_claim."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Are you at the train station?", as: ["Yes", "No"]}
]
,
[["strangers5_first_friend", 24], "DashedSentence", {s: "You_are_buying_a_gift_for_your_mom,_and_your_wife_recommends_you_a_perfume: This_is_a classic!_It's actually_my_mother's favorite:_she_still uses_it_after many_years_since first_trying_it."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Are you buying a gift for you grandmother?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 25], "DashedSentence", {s: "You_are_in_the_school_dining_hall_when_your_roommate_tells_you: This_dining_hall will_be closed_between_June and_September_because they_will_be doing_renovations."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Will the dining hall be closed for the entire summer?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 26], "DashedSentence", {s: "You_are_on_a_road_trip_with_an_old_boyfriend_when_he_asks_you: What_time_are we_meeting your_sister_when we_get_to Portland_this_evening?"}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you meeting someone in Portland?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 27], "DashedSentence", {s: "You_are_having_lunch_at_a_Japanese_restaurant_with_some_friends_when_one_of_them_comments: The_sushi_here is_not as_good_as what_you_can get_in_Japan."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Are you and your friends having sushi for lunch?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 28], "DashedSentence", {s: "You_are_shopping_at_an_outlet_mall_with_several_friends_when_one_of_them_says: We_shouldn't_have come_here. The_clothes_are not_cheap_at all."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Do you and your friends regret coming to the outlet mall?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 29], "DashedSentence", {s: "You_are_writing_an_essay_at_your_parents'_place_when_your_mom_warns_you: Don't_lay_on the_couch while_doing_your homework_or_you will_fall_asleep."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Was your mother concerned that you would not finish your homework?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 30], "DashedSentence", {s: "You_are_having_lunch_when_your_housemate_comes_into_the_kitchen_and_comments: I_can't_believe you_only eat_an_egg and_a_tomato for_lunch."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Was your housemate surprised that you had such a light lunch?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 31], "DashedSentence", {s: "You_are_leaving_the_library_with_one_of_your_classmates_when_he_tells_you: They_have_extended the_deadline for_our_biology paper:_It_is not_due_until Wednesday."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Has the deadline for your biology paper passed?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 32], "DashedSentence", {s: "You_are_chatting_with_your_friend_at_a_Starbucks_when_she_comments: I_heard_Anna broke_up with_her_boyfriend after_six_and a_half_years together."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Did Anna break up with her boyfriend after eight and a half years together?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 33], "DashedSentence", {s: "You_are_cooking_dinner_with_your_mother_when_she_tells_you: Don't_put_onions in_the noodles:_One_of our_guests_is allergic_to_onions."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Can all of tonight's guests eat onions?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 34], "DashedSentence", {s: "You_are_visiting_a_chocolate_factory_with_your_mother_when_she_comments: Their_chocolate_contains only_five percent_sugar._That's why_it_tastes so_bitter."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Did the chocolate contain seven percent sugar?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 35], "DashedSentence", {s: "You_are_at_a_Christmas_party_when_one_of_your_colleagues_asks: Do_you_have any_ideas for_a_Christmas present_for_my 12_year_old daughter?"}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Were you and your colleagues at a birthday party?", as: ["Yes", "No"]}
]
,
[["FillerFriend_FillerFriend", 36], "DashedSentence", {s: "You_are_on_a_Skype_call_with_your_family_when_your_father_comments: You_should_tell us_what you_want_for your_birthday_this year."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Was your father thinking of getting you a Christmas present?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 37], "DashedSentence", {s: "You_are_sitting_in_a_coffee_shop_and_the_customer_next_to_you_comments: The_service_here has_been getting_worse_and worse_since_they got_a_new manager."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Did the coffee shop change managers recently?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 38], "DashedSentence", {s: "You_are_at_a_fancy_business_dinner_and_the_waiter_makes_a_recommendation: A_French_red wine_would go_very_well with_the_steak you_just_ordered."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Did the waiter suggest you should order a red wine?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 39], "DashedSentence", {s: "You_are_on_the_bus_and_start_searching_your_pockets_for_change_when_the_bus_driver_says: Please_hurry_up! There_are many_people_behind you_and_it's cold_outside."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Was the bus driver in a hurry?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 40], "DashedSentence", {s: "You_are_on_a_train_and_a_little_girl_compliments_you: I_love_your dress._I wish_I_had one_like_that myself."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Did the little girl flatter you?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 41], "DashedSentence", {s: "You_are_out_walking_your_dog_when_a_woman_asks_you: Where_do_you get_your dog_groomed? Her coat_is_so beautiful."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Did the woman think your dog was well groomed?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 42], "DashedSentence", {s: "You_are_waiting_in_the_doctor's_office_when_one_of_the_other_patients_comments: I_hate_this wallpaper._The flowers_are_so ugly._They_should really_change_it."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "Yes", randomOrder: false,
  q: "Did the wall paper in the doctor's office have flowers on it?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 43], "DashedSentence", {s: "You_are_at_a_bus_stop_when_an_old_lady_remarks: It_is_going to_rain today:_I_can feel_it_in my_bones."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Did the old lady forecast a sunny day?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 44], "DashedSentence", {s: "You_have_been_waiting_at_a_bus_stop_for_a_few_minutes_when_a_young_man_asks_you: Do_you_happen to_know what_time_the bus_is_supposed to_come?"}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Did the young man ask you about a train?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 45], "DashedSentence", {s: "You_are_sitting_on_a_park_bench_when_the_man_next_to_you_says: It_is_really sunny_today. I_should_have put_on_more sunscreen."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Was it overcast at the park?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 46], "DashedSentence", {s: "You_are_at_a_farmers'_market_and_one_of_the_vendors_asks: Would_you_like to_try my_organic_goat cheese?_It's_really delicious."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Did the farmer offer you organic cheese from a cow?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 47], "DashedSentence", {s: "You_are_on_a_boat_and_the_woman_next_to_you_comments: I_feel_so bad_for people_who_get seasick._I_love sailing."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Was the woman next to you feeling seasick?", as: ["Yes", "No"]}
]
,
[["FillerStranger_FillerStranger", 48], "DashedSentence", {s: "You_are_about_to_board_your_plane_when_the_person_behind_you_in_line_comments: I_wish_I had_booked first_class_so I_could_have boarded_already."}, 
"Separator", {normalMessage: "Get ready for the question..."}, 
"Question", {hasCorrect: "No", randomOrder: false,
  q: "Was the person behind you happy to fly economy?", as: ["Yes", "No"]}
]

];

