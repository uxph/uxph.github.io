team_info = [];
$(document).ready(function(){
    $('#team-sidebar li').click(function(){
        set_role_content($(this).index());
    });
});

function add_role(obj){
    jQuery.each(obj, function(i, val){
        team_info.push(val);
    });
}

function set_role_content(index){
    $('#team-sidebar li').removeClass("active");
    $($('#team-sidebar li')[index]).addClass("active");
    $('#role-description').empty();
    $('#role-responsibilities').empty();
    $('#role-requirements').empty();

    $('#role-name').text(team_info[index].role);
    $('#role-description').append('<p>' + team_info[index].description + '</p>');

    jQuery.each(team_info[index].responsibilities, function(i, val){
        $('#role-responsibilities').append('<li>' + val + '</li>');
    });

    jQuery.each(team_info[index].requirements, function(i, val){
        $('#role-requirements').append('<li>' + val + '</li>');
    });
}
