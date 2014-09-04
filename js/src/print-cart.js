/* Welcome to the PRINT CART! */

if( !localStorage.current_printcart ) {
	localStorage.current_printcart = "";
}

// if( !localStorage.saved_printcarts ) {
// 	localStorage.saved_printcarts = "";
// }

function get_print_cart_items() {
	if( localStorage.current_printcart != "") {
		return JSON.parse(localStorage.current_printcart);
	} else {
		return Array();
	}
}

function save_print_cart_items(current_items) {
	localStorage.current_printcart = JSON.stringify(current_items);
	print_cart_items_html();
}

function move_print_cart_item_up(cart_index) {
	current_items = get_print_cart_items();
	if(cart_index > 0 && current_items.length > 1) {
		tmp = current_items[cart_index - 1];
		current_items[cart_index - 1] = current_items[cart_index];
		current_items[cart_index] = tmp;
		save_print_cart_items(current_items);
	}
}

function move_print_cart_item_down(cart_index) {
	current_items = get_print_cart_items();
	if(cart_index < current_items.length && current_items.length > 1) {
		tmp = current_items[cart_index + 1];
		current_items[cart_index + 1] = current_items[cart_index];
		current_items[cart_index] = tmp;
		save_print_cart_items(current_items);
	}
}

function add_to_print_cart( html ) {
	current_items = get_print_cart_items();
	current_items.push(html);
	save_print_cart_items(current_items);
}

function print_cart_items_html() {
	current_items = get_print_cart_items();
	if( current_items.length > 0 ) {
		$(".js-print-cart-button").html( "<a href=\"print_cart.html\" class=\"btn btn-xs btn-primary\">Print Cart (" + current_items.length + ")</a>" );
	}
	else
		$(".js-print-cart-button").html( "" );
}

function remove_print_cart_item(cart_index) {
	current_items = get_print_cart_items();
	current_items.splice(cart_index, 1);
	save_print_cart_items(current_items);
}

function get_number_print_cart_items() {
	current_items = get_print_cart_items();
	return current_items.length;
}

function create_print_view() {
	current_items = get_print_cart_items();
	html = "";
	if(current_items.length > 0) {
		html += "<div class=\"no-print text-left\" style=\"margin-top: 20px;\"><p>To print scroll down and click the <button class=\"btn btn-primary btn-xs\" onclick=\"window.print();\">Print These Items</button> button, or just print via your Web Browser's File menu (or Control/Command-P). The print result should (hopefully) be styled for easy reading.</p><p><strong>Also Note</strong> that items in cart may not be reflective of the items you have stored if you've modified them since adding them to your cart. You may have to delete and readd the items.</p> <hr /></div>";
		for(pcart_c = 0; pcart_c < current_items.length; pcart_c++) {
			html += "<article>";
			html += "<div class=\"pull-right text-right\">";
			if(pcart_c > 0)
				html += " <a ref=\"" + pcart_c + "\" class=\"btn btn-primary btn-sm js-move-up-print-cart-item\">Move Up</a>";
			if(pcart_c < current_items.length - 1)
				html += " <a ref=\"" + pcart_c + "\" class=\"btn btn-primary btn-sm js-move-down-print-cart-item\">Move Down</a>";
			html += " <a ref=\"" + pcart_c + "\" class=\"btn btn-danger btn-sm js-delete-print-cart-item\">Delete</a>";
			html += "</div>";
			html += current_items[pcart_c] + "</article><hr class=\"no-print\" />";
		}
		html += "<div class=\"no-print text-left\"><button class=\"btn btn-primary\" onclick=\"window.print();\">Print These Items</button></div>";
	} else {
		html += "<h3>You have no items in your print cart.</h3>";
	}
	$(".js-print-cart-items").html( html );

	$(".js-delete-print-cart-item").unbind("click");
	$(".js-delete-print-cart-item").click( function() {
		var delete_print_item_index = $(this).attr("ref") / 1;
		bootbox.confirm("Are you sure you want to delete this entry?", function(ok_clicked) {
			if(ok_clicked) {
				remove_print_cart_item( delete_print_item_index );
				create_print_view();
			}
		});

	});


	$(".js-move-up-print-cart-item").unbind("click");
	$(".js-move-up-print-cart-item").click( function() {
		item_index = $(this).attr("ref") / 1;
		move_print_cart_item_up( item_index );
		create_print_view();
	});


	$(".js-move-down-print-cart-item").unbind("click");
	$(".js-move-down-print-cart-item").click( function() {
		item_index = $(this).attr("ref") / 1;
		move_print_cart_item_down( item_index );
		create_print_view();
	});
}

$(document).ready( function() {
	print_cart_items_html();
});