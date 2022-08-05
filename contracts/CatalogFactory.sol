// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./Catalog.sol";

contract CatalogFactory {
    event CatalogCreated(address creator, address indexed contractAddress);

    address implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function createCatalog(string memory _name, string memory _symbol)
        public
        returns (address)
    {
        address clone = Clones.clone(implementation);
        emit CatalogCreated(msg.sender, address(clone));
        Catalog(address(clone)).initialize(_name, _symbol);
        Catalog(address(clone)).simpleMint(msg.sender);
        Catalog(address(clone)).transferOwnership(msg.sender);
        return address(clone);
    }
}