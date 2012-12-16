/// <reference path="../Scripts/jquery-1.7.1.min.js" />
/// <reference path="../Scripts/knockout-2.1.0.js" />
function customer(id, name, age, comments) {
    var self = this;

    self.Id = id;
    self.Name = name;
    self.Age = age;
    self.Comments = comments;

    self.addCustomer = function() {
        $.ajax({
            url: "/api/customer",
            type: 'post',
            data: ko.toJSON(this),
            contentType: 'application/json',
            success: function(result) {

            }
        });
    };
}

function customerVM() {
    var self = this;
    self.customers = ko.observableArray([]);
    self.getCustomers = function() {
        self.customers.removeAll();
        $.getJSON("/api/customer/", function(data) {
            $.each(data, function(key, val) {
                self.customers.push(new customer(val.Id, val.Name, val.Age, val.Comment));
            });
        });
    };
}

$(document).ready(function() {
    ko.applyBindings(new customerVM(), document.getElementById('displayNode'));
    ko.applyBindings(new customer(), document.getElementById('createNode'));
})