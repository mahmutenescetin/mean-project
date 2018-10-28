

var anaSayfa=function(req,res){

    res.render('mekanlar-liste',
	 {'baslik':'Anasayfa',
	   'sayfaBaslik':{
	   'siteAd':'Mekan32','aciklama':'Isparta civarindaki mekanlari keşfedin.' },
	   'mekanlar':[{
		'ad':'Starbucks',
		'adres':'Centrum Garden',
		'puan':3,
		'imkanlar':['kahve','çay','ciğer'],
		'mesafe':'10 km'
		
	   },
	   {
		'ad':'Gloria Jeans',
		'adres':'İyaş Avm',
		'puan':4,
		'imkanlar':['kahve','çay','at kadası'],
		'mesafe':'4 km'
		
	   
	   
	   },
	   {
		'ad':'Yemen Kahvesi',
		'adres':'Çarşı',
		'puan':2,
		'imkanlar':['kahve','çay','at kadası'],
		'mesafe':'15 km'
		
	   
	   
	   },
	   {
		'ad':'Roberts Coffea',
		'adres':'Meydan',
		'puan':5,
		'imkanlar':['kahve','çay','at kadası'],
		'mesafe':'20 km'
		
	   
	   
	   },
	   {
		'ad':'Osmanlı Kahvesi',
		'adres':'Meydan',
		'puan':3,
		'imkanlar':['kahve','çay','at kadası'],
		'mesafe':'20 km'
		
	   
	   
	   },
	   ]
	   
	 
	
	
	
	});   
};var mekanBilgisi=function(req,res){

    res.render('mekan-detay',{'title':'Mekan Bilgisi'});   
};var yorumEkle=function(req,res){

    res.render('yorum-ekle',{'title':'Yorum Ekle'});   
};
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle,
};


