$(function(){return $(".github").each(function(){var t,e,r,n,i,a,o,f,l;t=$(this);i="https://api.github.com";a="https://github.com";o="geowa4";e=function(t){return t.data};n=function(){return $.ajax({url:i+"/users/"+o,dataType:"jsonp"}).then(e)};l=function(e){t.find(".user-link").attr("href",a+"/"+o);t.find(".avatar .profile-pic").attr("src",e.avatar_url);t.find(".login").text(e.login);t.find("a.followers").attr("href",a+"/"+o+"/followers");t.find(".followers .value").text(e.followers);t.find("a.following").attr("href",a+"/"+o+"/following");t.find(".following .value").text(e.following);t.find("a.repo-count").attr("href",a+"/"+o+"?tab=repositories");t.find(".repo-count .value").text(e.public_repos);return e};r=function(t){return $.ajax({url:t.repos_url,dataType:"jsonp",data:{sort:"pushed",direction:"desc",perPage:100}}).then(e)};f=function(e){var r,n,i,a,o,f;o=t.find(".repos");f=o.find(".repo").detach();i=function(t,e){var r;r=f.clone();if(t.fork){r.find(".title .material-icons").text("call_split").attr("title","fork")}else{r.find(".title .material-icons").text("code").attr("title","original")}r.find(".title a").attr("href",t.html_url).text(t.name);r.find(".description").text(t.description);r.find(".issues a").attr("href",t.html_url+"/issues").find(".value").text(t.open_issues);r.find(".stargazers a").attr("href",t.html_url+"/stargazers").find(".value").text(t.stargazers_count);r.find(".forks a").attr("href",t.html_url+"/forks").find(".value").text(t.forks_count);return e.append(r)};for(r=0,n=e.length;r<n;r++){a=e[r];i(a,o)}return e};return n().then(l).then(r).then(f).then(function(){return t.addClass("rendered")})})});