module.exports.renderAbout = function(req, res){
res.send('static_pages/about');
};
module.exports.renderContact = function(req, res){
res.send('static_pages/contact');
};

module.exports.renderHome = function(req, res){
res.render('static_pages/index', {
  title: 'Hello WDI'
  });
};
