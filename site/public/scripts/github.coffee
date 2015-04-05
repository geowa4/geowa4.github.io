$ ->
  $('.github').each ->
    elem = $ this
    github_api_root = 'https://api.github.com'
    github_site_url = 'https://github.com'
    github_username = 'geowa4'
    extract_data = (value) -> value.data

    get_github_user = ->
      $.ajax
        url: "#{github_api_root}/users/#{github_username}"
        dataType: 'jsonp'
      .then extract_data

    render_user = (user) ->
      elem.find('.avatar a').attr 'href', "#{github_site_url}/#{github_username}"
      elem.find('.avatar .profile-pic').attr 'src', user.avatar_url
      elem.find('.login').text user.login
      elem.find('.followers a').attr 'href', "#{github_site_url}/#{github_username}/followers"
      elem.find('.followers .value').text user.followers
      elem.find('.following a').attr 'href', "#{github_site_url}/#{github_username}/following"
      elem.find('.following .value').text user.following
      elem.find('.repo-count a').attr 'href', "#{github_site_url}/#{github_username}?tab=repositories"
      elem.find('.repo-count .value').text user.public_repos
      user

    get_github_repo_list = (user) ->
      $.ajax
        url: user.repos_url
        dataType: 'jsonp'
        data:
          sort: 'pushed'
          direction: 'desc'
          perPage: 100
      .then extract_data

    render_repos = (repos) ->
      repos_elem = elem.find('.repos')
      template = repos_elem.find('.repo').detach()
      render_template = (repo, repos_elem) ->
        t = template.clone()
        t.find '.title a'
        .attr 'href', repo.html_url
        .text repo.name
        t.find '.description'
        .text repo.description
        t.find '.issues a'
        .attr 'href', "#{repo.html_url}/issues"
        .find '.value'
        .text repo.open_issues
        t.find '.stargazers a'
        .attr 'href', "#{repo.html_url}/stargazers"
        .find '.value'
        .text repo.stargazers_count
        repos_elem.append t
      render_template repo, repos_elem for repo in repos
      repos

    get_github_user()
    .then render_user
    .then get_github_repo_list
    .then render_repos
    .then ->
      elem.addClass 'rendered'
