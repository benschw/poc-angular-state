<?php
namespace MyApp;

use Fliglio\Flfc\Context;
use Fliglio\Flfc\Request;
use Fliglio\Flfc\Response;
use Fliglio\Flfc as flfc;
use Fliglio\Flfc\NamespaceFcChainResolver;
use Fliglio\Flfc\DefaultFcChainResolver;
use Fliglio\Flfc\FcChainFactory;
use Fliglio\Flfc\FcChainRunner;
use Fliglio\Routing as routing;
use Fliglio\Routing\RouteMap;


require_once __DIR__ . '/../fliglio/bootstrap.php';



// Configure Routing
$routeMap = new RouteMap();
$routeMap
	->connect("all-cities", new routing\PatternRoute('/api/cities', array(
		'ns'           => 'WeatherApp',
		'commandGroup' => 'Services',
		'command'      => 'cities',
		'_restful'     => true,
	)))
	->connect("city-details", new routing\PatternRoute('/api/city/:id', array(
		'ns'           => 'WeatherApp',
		'commandGroup' => 'Services',
		'command'      => 'city',
		'_restful'     => true,
	)))
	->connect("error", new routing\CatchNoneRoute(array(
		'ns'           => 'WeatherApp',
		'commandGroup' => 'Services',
		'command'      => 'error',
	)))
	->connect("404", new routing\CatchAllRoute(array(
		'ns'           => 'WeatherApp',
		'commandGroup' => 'Services',
		'command'      => 'notFound',
	)));

session_start();


// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *'); 

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');


// Additional headers which may be sent along with the CORS request
// The X-Requested-With header allows jQuery requests to go through
header('Access-Control-Allow-Headers: X-Requested-With');




// Configure Front Controller Chain & Default Resolver
$htmlChain = new flfc\HttpApp(new flfc\ServeHtmlApp(dirname(__FILE__) . '/index.html'));
$apiChain  = new flfc\HttpApp(new routing\UriLintApp(new routing\RoutingApp(new routing\RestInvokerApp(), $routeMap)));

FcChainFactory::addResolver(new DefaultFcChainResolver($htmlChain));
FcChainFactory::addResolver(new NamespaceFcChainResolver($apiChain, 'api'));
FcChainFactory::addResolver(new NamespaceFcChainResolver($apiChain, '@'));

// Run App
$context = new Context(Request::createDefault(), new Response());
$chainRunner = new FcChainRunner();
$chainRunner->dispatchRequest($context, "@404", "@error");
