/**
 *
 * @fileoverview
 *
 * Getters for Soy Idom runtime. Required because we don't want to incur a
 * runtime cost for requiring incrementaldom directly.
 *
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode}
 * checked by tsc
 */
goog.module('google3.javascript.template.soy.global');
var module = module || {id: 'javascript/template/soy/global.closure.js'};
module = module;
exports = {};
const tsickle_asserts_1 = goog.requireType('goog.asserts');
const tsickle_soy_2 = goog.requireType('goog.soy');
const tsickle_element_lib_idom_3 = goog.requireType('google3.javascript.template.soy.element_lib_idom');
const goog_goog_asserts_1 = goog.require('goog.asserts');  // from //javascript/closure/asserts
/**
 * @record
 * @template TElement
 */
function ElementCtor() {}
/**
 * Retrieves the Soy element in a type-safe way.
 *
 * <p>Requires that the node has been rendered by this element already. Will
 * throw an Error if this is not true.
 * @template TElement
 * @param {!Node} node
 * @param {!ElementCtor<TElement>} elementCtor
 * @param {(undefined|string)=} message
 * @return {TElement}
 */
function getSoy(node, elementCtor, message) {
  /** @type {TElement} */
  const soyEl = goog_goog_asserts_1.assertInstanceof(
      getSoyUntyped(node), elementCtor, message);
  // We disable state syncing by default when elements are accessed on the
  // theory that the application wants to take control now.
  soyEl.setSyncState(false);
  return soyEl;
}
exports.getSoy = getSoy;
/**
 * Retrieves the Soy element in a type-safe way, or null if it doesn't exist
 * @template TElement
 * @param {!Node} node
 * @param {!ElementCtor<TElement>} elementCtor
 * @return {(null|TElement)}
 */
function getSoyOptional(node, elementCtor) {
  if (!node.__soy) return null;
  return getSoy(node, elementCtor);
}
exports.getSoyOptional = getSoyOptional;
/**
 * When rehydrating a Soy element, tag the element so that rehydration stops at
 * the Soy element boundary.
 * @param {!Node} node
 * @return {void}
 */
function tagForSkip(node) {
  node.__soy_tagged_for_skip = true;
}
exports.tagForSkip = tagForSkip;
/**
 * Once a soy element has been tagged, reset the tag.
 * @param {!Node} node
 * @return {boolean}
 */
function isTaggedForSkip(node) {
  /** @type {boolean} */
  const isTaggedForSkip = node.__soy_tagged_for_skip;
  node.__soy_tagged_for_skip = false;
  return isTaggedForSkip;
}
exports.isTaggedForSkip = isTaggedForSkip;
/**
 * Retrieves an untyped Soy element, or null if it doesn't exist.
 * @param {!Node} node
 * @return {(null|!tsickle_element_lib_idom_3.SoyElement<*, ?>)}
 */
function getSoyUntyped(node) {
  return node.__soy;
}
exports.getSoyUntyped = getSoyUntyped;
//#
// sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vamF2YXNjcmlwdC90ZW1wbGF0ZS9zb3kvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSx5REFBbUQsQ0FBRSxvQ0FBb0M7Ozs7O0FBWXpGLDBCQUdDOzs7Ozs7Ozs7Ozs7QUFRRCxTQUFnQixNQUFNLENBQ2xCLElBQVUsRUFBRSxXQUFrQyxFQUFFLE9BQWdCOztVQUM1RCxLQUFLLEdBQUcsb0NBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUM7SUFDekUsd0VBQXdFO0lBQ3hFLHlEQUF5RDtJQUN6RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVBELHdCQU9DOzs7Ozs7OztBQUdELFNBQWdCLGNBQWMsQ0FDMUIsSUFBVSxFQUFFLFdBQWtDO0lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzdCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSkQsd0NBSUM7Ozs7Ozs7QUFNRCxTQUFnQixVQUFVLENBQUMsSUFBVTtJQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLENBQUM7QUFGRCxnQ0FFQzs7Ozs7O0FBS0QsU0FBZ0IsZUFBZSxDQUFDLElBQVU7O1VBQ2xDLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCO0lBQ2xELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQUpELDBDQUlDOzs7Ozs7QUFHRCxTQUFnQixhQUFhLENBQUMsSUFBVTtJQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEIsQ0FBQztBQUZELHNDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKlxuICogR2V0dGVycyBmb3IgU295IElkb20gcnVudGltZS4gUmVxdWlyZWQgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGluY3VyIGFcbiAqIHJ1bnRpbWUgY29zdCBmb3IgcmVxdWlyaW5nIGluY3JlbWVudGFsZG9tIGRpcmVjdGx5LlxuICovXG5cbmltcG9ydCB7YXNzZXJ0SW5zdGFuY2VvZn0gZnJvbSAnZ29vZzpnb29nLmFzc2VydHMnOyAgLy8gZnJvbSAvL2phdmFzY3JpcHQvY2xvc3VyZS9hc3NlcnRzXG5pbXBvcnQge0lqRGF0YX0gZnJvbSAnZ29vZzpnb29nLnNveSc7ICAvLyBmcm9tIC8vamF2YXNjcmlwdC9jbG9zdXJlL3NveVxuXG5pbXBvcnQge1NveUVsZW1lbnR9IGZyb20gJy4vZWxlbWVudF9saWJfaWRvbSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIE5vZGUge1xuICAgIF9fc295OiBTb3lFbGVtZW50PHt9LCB7fT58bnVsbDtcbiAgICBfX3NveV90YWdnZWRfZm9yX3NraXA6IGJvb2xlYW47XG4gIH1cbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRDdG9yPFRFbGVtZW50IGV4dGVuZHMgU295RWxlbWVudDx7fXxudWxsLCB7fT4+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBSZWFsIHBhcmFtZXRlciB0eXBlIGlzIG9ubHkgdXNlZCBwcml2YXRlbHkuXG4gIG5ldyhkYXRhOiBhbnksIGlqRGF0YTogSWpEYXRhKTogVEVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBTb3kgZWxlbWVudCBpbiBhIHR5cGUtc2FmZSB3YXkuXG4gKlxuICogPHA+UmVxdWlyZXMgdGhhdCB0aGUgbm9kZSBoYXMgYmVlbiByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnQgYWxyZWFkeS4gV2lsbFxuICogdGhyb3cgYW4gRXJyb3IgaWYgdGhpcyBpcyBub3QgdHJ1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNveTxURWxlbWVudCBleHRlbmRzIFNveUVsZW1lbnQ8e318bnVsbCwge30+PihcbiAgICBub2RlOiBOb2RlLCBlbGVtZW50Q3RvcjogRWxlbWVudEN0b3I8VEVsZW1lbnQ+LCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHNveUVsID0gYXNzZXJ0SW5zdGFuY2VvZihnZXRTb3lVbnR5cGVkKG5vZGUpLCBlbGVtZW50Q3RvciwgbWVzc2FnZSk7XG4gIC8vIFdlIGRpc2FibGUgc3RhdGUgc3luY2luZyBieSBkZWZhdWx0IHdoZW4gZWxlbWVudHMgYXJlIGFjY2Vzc2VkIG9uIHRoZVxuICAvLyB0aGVvcnkgdGhhdCB0aGUgYXBwbGljYXRpb24gd2FudHMgdG8gdGFrZSBjb250cm9sIG5vdy5cbiAgc295RWwuc2V0U3luY1N0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIHNveUVsO1xufVxuXG4vKiogUmV0cmlldmVzIHRoZSBTb3kgZWxlbWVudCBpbiBhIHR5cGUtc2FmZSB3YXksIG9yIG51bGwgaWYgaXQgZG9lc24ndCBleGlzdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNveU9wdGlvbmFsPFRFbGVtZW50IGV4dGVuZHMgU295RWxlbWVudDx7fSwge30+PihcbiAgICBub2RlOiBOb2RlLCBlbGVtZW50Q3RvcjogRWxlbWVudEN0b3I8VEVsZW1lbnQ+KSB7XG4gIGlmICghbm9kZS5fX3NveSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBnZXRTb3kobm9kZSwgZWxlbWVudEN0b3IpO1xufVxuXG4vKipcbiAqIFdoZW4gcmVoeWRyYXRpbmcgYSBTb3kgZWxlbWVudCwgdGFnIHRoZSBlbGVtZW50IHNvIHRoYXQgcmVoeWRyYXRpb24gc3RvcHMgYXRcbiAqIHRoZSBTb3kgZWxlbWVudCBib3VuZGFyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhZ0ZvclNraXAobm9kZTogTm9kZSkge1xuICBub2RlLl9fc295X3RhZ2dlZF9mb3Jfc2tpcCA9IHRydWU7XG59XG5cbi8qKlxuICogT25jZSBhIHNveSBlbGVtZW50IGhhcyBiZWVuIHRhZ2dlZCwgcmVzZXQgdGhlIHRhZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnZ2VkRm9yU2tpcChub2RlOiBOb2RlKSB7XG4gIGNvbnN0IGlzVGFnZ2VkRm9yU2tpcCA9IG5vZGUuX19zb3lfdGFnZ2VkX2Zvcl9za2lwO1xuICBub2RlLl9fc295X3RhZ2dlZF9mb3Jfc2tpcCA9IGZhbHNlO1xuICByZXR1cm4gaXNUYWdnZWRGb3JTa2lwO1xufVxuXG4vKiogUmV0cmlldmVzIGFuIHVudHlwZWQgU295IGVsZW1lbnQsIG9yIG51bGwgaWYgaXQgZG9lc24ndCBleGlzdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3lVbnR5cGVkKG5vZGU6IE5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuX19zb3k7XG59XG4iXX0=