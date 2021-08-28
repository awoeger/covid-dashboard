const dishes = [
  {
    continent: 'Europe',
    country: 'Albania',
    dish: 'Tavë Kosi',
    cooking_time: '120',
    servings: '8',
    preperation:
      'Preheat the oven to 180C/160C Fan/Gas 4. Heat 20g/¾oz of the butter and the olive oil in a large lidded pan over a high heat. Brown the lamb in batches. Return all the lamb to the pan. Add the garlic, oregano and 200ml/7fl oz water. Bring to a simmer and cook, covered with a lid, for about 45–60 minutes until the lamb is tender. Stir in the rice, and season with salt and pepper. Transfer to a 3 litre/5¼ pint earthenware or other ovenproof dish. Melt the remaining butter in a small saucepan, add the flour and make a roux, cook for 2 minutes, then take off the heat. Add the yoghurt and mix well, then return to the heat and cook gently for a couple of minutes. Take off the heat, add the beaten eggs and season with salt and pepper. Pour the sauce over the lamb and rice mixture, grate fresh nutmeg on top and bake for 40–45 minutes until starting to turn golden-brown. Remove from the oven and allow to sit for 5 minutes before serving. Serve with a simple lettuce salad.',
  },
  {
    continent: 'Europe',
    country: 'Andorra',
    dish: 'Trinxat',
    cooking_time: '50',
    servings: '4',
    preperation:
      'Bring salted water to boil in a large pot. Add in the cabbage and potatoes, cook until tender about 30-40 minutes. When tender, drain, very well. Return the vegetables to the pot and turn on the burner to low. Let steam. Meanwhile cook up the bacon, reserving the fat for frying the hash. Chop up the bacon, into small pieces. Mash the potatoes and cabbage with a potato masher and add in the minced garlic. Add in salt and pepper to taste. Using a form for individual servings, press the hash mixture into the form with bacon on top, fry in the reserved bacon fat until golden brown, flip over and repeat on the other side. Remove form and garnish with chopped parsley. If you want to make one big hash, just use a skillet, pressing the hash into the skillet with the bacon pieces and reserved fat, then flip over once golden brown. Cut into servings.Garnish with chopped parsley.',
  },

  {
    continent: 'Europe',
    country: 'Armenia',
    dish: 'Harissa',
    cooking_time: '120',
    servings: '6',
    preperation:
      'Drain pearl barley and rinse under cold running water. Place in a large saucepan, cover with 2.5L water and bring to the boil. Reduce heat to medium and cook, adding more water if necessary, for 2½ hours or until water is absorbed and barley is very soft; don’t stir too often as this will cause barley to stick to the pan. Halfway through pearl barley cooking, place the chicken in a stockpot and cover with water. Bring to the boil, skimming any impurities that rise to the surface, then reduce heat to medium and cook for 1 hour or until chicken is cooked through and starting to fall apart. Remove chicken from water and reserve 1.5L stock. When chicken is cool enough to handle, using your fingers, finely shred the meat, removing and discarding the skin and bones. Add shredded chicken and 1L reserved chicken stock to the cooked pearl barley. Place pan over low heat and cook, stirring occasionally, for 20 minutes or until thick. Blend with a handheld blender until the consistency of fine porridge; add more of the reserved 500ml stock if necessary to achieve the desired consistency. Season with salt, white pepper and cumin. Just before serving, melt butter in a small pan and cook until a nut-brown colour. Pour over harissa. Serve with extra cumin and the berbere sprinkled over',
  },

  {
    continent: 'Europe',
    country: 'Austria',
    dish: 'Schnitzel',
    cooking_time: '60',
    servings: '4',
    preperation:
      'Lay out the cutlets, remove any skin and beat until thin. Season on both sides with salt and pepper. Place flour and breadcrumbs into separate flat plates, beat the eggs together on a further plate using a fork. Coat each schnitzel on both sides in flour, then draw through the beaten eggs, ensuring that no part of the schnitzel remains dry. Lastly, coat in the breadcrumbs and carefully press down the crumbs using the reverse side of the fork (this causes the crumb coating to “fluff up” better during cooking). In a large pan (or 2 medium-sized pans), melt sufficient clarified butter for the schnitzel to be able to swim freely in the oil (or heat up the plant oil with 1 – 2 tbsp of clarified butter or butter). Only place the Schnitzel in the pan when the fat is so hot that it hisses and bubbles up if some breadcrumbs or a small piece of butter is introduced to it. Depending on the thickness and the type of meat, fry for between 2 minutes and 4 minutes until golden brown. Turn using a spatula (do not pierce the coating!) and fry on the other side until similarly golden brown.Remove the crispy schnitzel and place on kitchen paper to dry off. Dab carefully to dry the schnitzel. Arrange on the plate and garnish with slices of lemon before serving.Serve with parsley potatoes, rice, potato salad or mixed salad.',
  },

  {
    continent: 'Europe',
    country: 'Azerbaijan',
    dish: 'Plov',
    cooking_time: '90',
    servings: '8',
    preperation:
      'Heat oil in a large saucepan over high heat. Add lamb and cook for 4 minutes or until browned. Transfer to a bowl. Add garlic, carrots and onions to pan and cook for 6 minutes or until golden. Stir in cumin, apricots, chestnuts and 750 ml water. Bring to the boil, then reduce heat to low and cook, covered, for 1 hour or until lamb is tender.Meanwhile, soak rice in 1 litre salted water for 30 minutes. Drain, stir in saffron and transfer to a saucepan. Add stock and 125 ml water, cover and bring to the boil. Reduce heat to low and cook for 10 minutes or until rice is tender. Remove from heat and stand for 10 minutes. Spoon rice onto a platter and serve topped with lamb mixture and parsley.',
  },

  {
    continent: 'Europe',
    country: 'Belarus',
    dish: 'Draniki',
    cooking_time: '20',
    servings: '12',
    preperation:
      'Peel and grate the potatoes. Place grated pieces in a bowl of water. When all of the potatoes have soaked in the water, lay out a piece of paper towel. Fill the paper towel with the potatoes, bring the corners together and squeeze the excess water out of the potatoes and into a separate bowl. Once the water settles, discard the brown water at the top. At the bottom of each bowl (where the potatoes originally soaked and where the extra water was squeezed into) there should be a white, cloudy substance at the bottom of the bowl. Scrape out this substance and put it back into the potatoes. Mix the rest of the ingredients into the potatoes as well. Heat the oil on the stove. When oil is hot enough (for tips, see blog post above), add about 2 tbsp of potato mixture to the oil. Flatten with a spatula, and fry until brown. Flip and fry until the other side is brown. Drain on paper towel to remove excess oil. Serve with sour cream or apple sauce. Enjoy! ',
  },

  {
    continent: 'Europe',
    country: 'Belgium',
    dish: 'Vol au vents',
    cooking_time: '45',
    servings: '5',
    preperation:
      'Cook the chicken breasts or the chicken in the chicken stock, until tender (breasts should take about 30 minutes, a whole chicken 45 minutes or more). Drain, but keep the stock. Let the chicken cool down a bit. In the meanwhile, make tiny meatballs (max. 1 cm across) from the minced meat. Cook the meatballs in chicken stock or water until they are done -- this usually takes just a few minutes, the meatballs will drift to the top when ready. Drain them as well. Make a ""blonde"" sauce: melt most of the butter in a medium-sized pot (don not let it become brown), add flour and mix well. Keep the pot on medium heat. Then, very gradually, add splashes (think 2-3 tablespoons) of chicken stock to this mixture. Each time you added some stock, stir very well so that the mixture does not become lumpy. You can start adding increasing amounts of stock when your sauce becomes liquidish. Make a sauce that is somewhat thicker than cream; you will probably use most of your chicken stock in this process. This is fine. Quickly add the raw egg yolk, the lemon juice and the grated cheese to your sauce. In a large pot, melt the remaining lump of butter and add the mushrooms. Stir-fry the mushrooms on medium heat until they start to ""sweat"" (release their juices). Season with salt and pepper. Add the sauce and the ham dices to the mushrooms. Add the meatballs as well. Put on low heat. With your hands or a knife, pull apart the chicken and make bite-sized pieces (about 1 inch long, 1/2 inch across, or smaller). Add the chicken pieces to your mixture as well. Ready! Do check if the dish needs a bit more salt or pepper. You can eat the Vol-Au-Vent as it is, with potatoes or rices; you can also pour it in Vol-Au-Vent shells (puff pastry) or even make a chicken fricassee pie (in a puff pastry pie shell).',
  },

  {
    continent: 'Europe',
    country: 'Bosnia and Herzegovina',
    dish: 'Cevapi',
    cooking_time: '90',
    servings: '6',
    preperation:
      'Place the minced beef and pork in a large bowl, then peel and crush in the 4 cloves of garlic. Sprinkle over the bicarbonate of soda and paprika, and season.Crack in the egg and use your hands to scrunch everything together. Add as much of the sparkling water as you need to make a smooth, pliable mixture. Divide the meat into 10 to 12 pieces and roll each one into a sausage shape, about 10cm long and 2cm thick. Place the cevapi on an oiled baking tray, cover with clingfilm and chill in the fridge until needed. For the ajvar, preheat the oven to 230ºC/450ºF/gas 8. Place the whole peppers and aubergines on a large roasting tray along with the unpeeled garlic bulb and roast in the oven for 30 to 40 minutes, or until the veg skins are blackened, turning halfway through. Place the charred peppers and aubergines in a bowl, cover with clingfilm and leave for 20 minutes, to steam off the skins. Once they’ve cooled slightly, pull off and discard the skins, seeds and stalks and chop the flesh on a board. Squeeze out the garlic from 6 of the roasted cloves and add it to the veg along with most of the parsley, then chop it all together (if you have much roasted garlic leftover, stir it into softened butter and store in the fridge – it’s great for garlic bread!). Keep chopping everything together, season with sea salt and black pepper, squeeze over the juice of 1 of the lemons and drizzle over a good lug of oil. Adjust the seasoning to taste, then set aside. Finely chop the remaining parsley and tip into a bowl. Peel, finely chop and add the onion, squeeze over the juice from the remaining lemon, then mix together. Set aside. Just before you’re ready to serve, warm your flatbreads in the oven, and preheat a griddle pan over a high heat. Add the cevapi and griddle for 10 to 12 minutes, or until cooked through. Spread some ajvar on top of the warm flatbreads, with a couple of cevapi and a guindilla pepper (if using) on top of each, a dollop of sour cream and the herby onions on the side."',
  },

  {
    continent: 'Europe',
    country: 'Bulgaria',
    dish: 'Shopska Salad',
    cooking_time: '80',
    servings: '6',
    preperation:
      'Gather the ingredients. In a large bowl, place the tomatoes, cucumbers, peppers, onions, and parsley. Toss well to mix. In a large bowl, place the tomatoes, cucumbers, peppers, onions, and parsley Place the oil, vinegar, salt and pepper in a screw-top jar. Close and shake until well incorporated. Place the oil, vinegar, salt and pepper in a screw-top jar. Pour the dressing on top of the vegetables, turn into a serving bowl, and refrigerate until ready to serve. Alternatively, refrigerate the salad and dressing separately and allow each guest to add the desired amount on top of their salads. Pour the dressing on top of the vegetables. When ready to serve, top the salad with crumbled cheese.',
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO dishes ${sql(
    dishes,
    'continent',
    'country',
    'dish',
    'cooking_time',
    'servings',
    'preperation',
  )}
	 `;
};

exports.down = async function down(sql) {
  for (const dish of dishes) {
    await sql`
      DELETE FROM
        dishes
      WHERE
        country = ${dishes.country}
    `;
  }
};
