<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u915253381_U92wY' );
/** MySQL database username */
define( 'DB_USER', 'u915253381_xEuEP' );
/** MySQL database password */
define( 'DB_PASSWORD', 'Ty6WB6O3jp' );
/** MySQL hostname */
define( 'DB_HOST', 'mysql' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '-[+q>$t(oX[)0F1Pk,@*?+|D{K?S[XFQ7/dBnli:#tOFCbFG#c[_L@Aksm/whEwC' );
define( 'SECURE_AUTH_KEY',   'k^L;eiDH#)AW=$8-2g]p03Fe_+B1Q>>|L47gkZvAGbo{aHC5tQ6R&7Gk+Ik$gG `' );
define( 'LOGGED_IN_KEY',     'O}M;Uamj?qYcsXv{3L,ZyU`?^dljVHu8Z5IDb$^#</85x}NOoK7KkN7_E%.s|1@0' );
define( 'NONCE_KEY',         '?0,GrVQYP]NeVim6q6YMrbH5NDFy]rhz7$tRr1WbqTk2egqKa6^1<6tc!YvYa)fG' );
define( 'AUTH_SALT',         'Hx#0b1<wl7G3- XyVr1(cO3gH]zzwBmLCBh%ruyUIjsuoN_QGb2PT(vB@=nY*|1w' );
define( 'SECURE_AUTH_SALT',  '&WHAfj!8|~XDHULide)oSRsUl`^)6n}$FX8e?q7JQ{wLa00F2c=C7E}uh6I!3=SC' );
define( 'LOGGED_IN_SALT',    't^f=W~0!tfY(wX.}zUi4-`@o:,byrwkcw_O~tWA8x2v0nf/!1RikN^W+~N5`P[q$' );
define( 'NONCE_SALT',        'Eg5jr9_&/e0t|XPRq6Rg9ND}MQ%?q SV?8cpyfiWj/rCI[~p7mT8-k^L!dg*|UjE' );
define( 'WP_CACHE_KEY_SALT', 'rr1E4ruYW`$;9K1vNk:1Gl7=hUFp$ ;zJm{#Co81;6%XC3[30m3IPl{Z`k@{ -]a' );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';